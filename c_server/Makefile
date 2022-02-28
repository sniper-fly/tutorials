# $(NAME) = a.out
SERVER = socket_server.cpp
CLIENT = socket_client.cpp recv_line.cpp
CXX = clang++
CXXFLAGS = -std=c++98

ifndef offwww
CXXFLAGS += -Wall -Wextra -Werror 
endif

all:
	make client server

client:
	$(CXX) $(CXXFLAGS) -o client.out $(CLIENT)

server:
	$(CXX) $(CXXFLAGS) -o server.out $(SERVER)

clean:
	rm -rf *.out

re:
	make clean all
