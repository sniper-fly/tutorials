#include <sys/types.h>
#include <sys/socket.h>
#include <netinet/in.h>
#include <iostream>
#include <cstring>
#include <unistd.h>

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
        std::cerr << "error" << std::endl;
        return 2;
    }
    rc = listen(s, SOMAXCONN);
    if (rc < 0) {
        std::cerr << "error" << std::endl;
        return 3;
    }
    for (;;) {
        bzero(&client, len);
        c = accept(s, (struct sockaddr*)&client, (socklen_t*)&len);
        if (c < 0) {
            std::cerr << "error" << std::endl;
            return 4;
        }
        close(c);
    }
}
