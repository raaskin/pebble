import socket
import sys

sock = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
server_address=('localhost',10000)
sock.bind(server_address)

sock.listen(1)

while True:
    # Esperando conexion
    print >>sys.stderr, 'Waiting for the connection'
    connection, client_address = sock.accept()

    try:
        print >>sys.stderr, 'connection from', client_address

        # Recibe los datos en trozos y reetransmite
        while True:
            data = connection.recv(19)
            print >>sys.stderr, 'received "%s"' % data
            if data:
                print >>sys.stderr, 'sending the message back to the client'
                connection.sendall(data)
            else:
                print >>sys.stderr, 'there are no more data', client_address
                break

    finally:
        # Cerrando conexion
        connection.close()
