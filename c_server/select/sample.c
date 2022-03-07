#include <stdio.h>
#include <stdlib.h>
#include <sys/select.h>

int main(void){
    int fd = 0;
    fd_set rfds;
    struct timeval tv;
    char* inputval;
    int retval;

    FD_ZERO(&rfds);
    FD_SET(fd, &rfds);
    tv.tv_sec = 5;
    tv.tv_usec = 500000;

    retval = select(fd + 1, &rfds, NULL, NULL, &tv);

    if(retval < 0){
        perror("select()");
    }
    else if(retval > 0){
        scanf("%s", inputval);
        printf("input: %s\n", inputval);
    }
    else{
        printf("timeout\n");
    }
    return (EXIT_SUCCESS);
}
