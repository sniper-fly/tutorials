#include <sys/types.h>
#include <sys/socket.h>
#include <netinet/in.h>
#include <arpa/inet.h>
#include <iostream>
#include <cstring>
#include <unistd.h>

int main(int argc, char* argv[]) {
    int                s, rc;
    struct sockaddr_in server;
    if (argc != 2) {
        std::cerr << "error arguments" << std::endl;
        return 1;
    }

    s = socket(AF_INET, SOCK_STREAM, 0);
    if (s < 0) {
        std::cerr << "error socket" << std::endl;
        return 2;
    }

    bzero(&server, sizeof(struct sockaddr_in));
    server.sin_family      = AF_INET;
    server.sin_port        = htons(7777);
    server.sin_addr.s_addr = inet_addr(argv[1]);

    rc = connect(s, (struct sockaddr*)&server, sizeof(struct sockaddr_in));
    if (rc < 0) {
        std::cerr << "error connect" << std::endl;
        return 3;
    }
    close(s);
}
