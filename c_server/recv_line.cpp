#include <sys/types.h>
#include <sys/socket.h>
#include <cstddef>

int RecvLine(int iSocket, char* szBuf, int iLen) {
    int iBytesRead, iIdx, bNotDone;
    iBytesRead = recv(iSocket, &szBuf[0], 1, 0); // readと一緒
    iIdx       = 1;
    bNotDone   = true;

    while (bNotDone) {
        iBytesRead = recv(iSocket, &szBuf[iIdx], 1, 0);
        if (iBytesRead < 0) {
            return -1;
        }
        iIdx++;
        if ((szBuf[iIdx - 2] == '\r') && (szBuf[iIdx - 1] == '\n')) {
            bNotDone = false;
        }
        if (iIdx == iLen) {
            return -1;
        }
    }
    szBuf[iIdx - 2] == NULL;
    return true;
}
