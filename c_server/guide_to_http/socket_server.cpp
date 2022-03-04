#include <sys/types.h>
#include <sys/socket.h>
#include <netinet/in.h>
#include <iostream>
#include <cstring>
#include <unistd.h>
#include "socket.hpp"

static void TalkToClient(int iSocket) {
    int  iRc, bNotDone;
    char szBuf[256], szOk[] = "OK", szErr[] = "ERR";
    bNotDone = true;

    while (bNotDone) {
        iRc = RecvLine(iSocket, szBuf, 256);
        if (iRc < 0) {
            std::cerr << "error recvline" << std::endl;
            bNotDone = false;
        }
        if (strcmp(szBuf, "HELLO") == 0) {
            iRc = send(iSocket, szOk, strlen(szOk), 0);
            if (iRc < 0) {
                std::cerr << "error send" << std::endl;
                bNotDone = false;
            }
        } else if (strcmp(szBuf, "GOODBYE") == 0) {
            if (iRc < 0) {
                std::cerr << "error send" << std::endl;
                bNotDone = false;
            }
            bNotDone = false;
        } else {
            send(iSocket, szErr, strlen(szErr), 0);
            bNotDone = false;
        }
    }
    close(iSocket);
}

int main(int argc, char* argv[]) {
    (void)argc;
    (void)argv;
    int                s, rc, c, len;
    struct sockaddr_in server, client;

    s = socket(AF_INET, SOCK_STREAM, 0);
    if (s < 0) {
        std::cerr << "error" << std::endl;
        return 1;
    }
    len = sizeof(struct sockaddr_in);
    bzero(&server, len);
    server.sin_family      = AF_INET;
    server.sin_port        = htons(7777);
    server.sin_addr.s_addr = INADDR_ANY;
    rc                     = bind(s, (struct sockaddr*)&server, len);
    if (rc < 0) {
        std::cerr << "error bind" << std::endl;
        return 2;
    }
    rc = listen(s, SOMAXCONN);
    if (rc < 0) {
        std::cerr << "error listen" << std::endl;
        return 3;
    }
    for (;;) {
        bzero(&client, len);
        c = accept(s, (struct sockaddr*)&client, (socklen_t*)&len);
        if (c < 0) {
            std::cerr << "error accept" << std::endl;
            return 4;
        }
        TalkToClient(c);
        close(c);
    }
}
