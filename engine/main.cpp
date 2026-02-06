#include <iostream>
#include <string>
 
int main() {
    std::string command;

    // pętla nieskończona - silnik nasłuchuje komend
    while (std::getline(std::cin, command)) {
        // logika UCI (Universal Chess Interface)
        if (command == "uci") {
            std::cout << "id name VizzyEngine v1.0" << std::endl;
            std::cout << "id author Vizzy" << std::endl;
            std::cout << "uciok" << std::endl;
        }
        else if (command == "isready") {
            std::cout << "readyok" << std::endl;
        }
        else if (command == "quit") {
            break;
        }
        // na razie ignoruję inne komendy
    }
    return 0;
}