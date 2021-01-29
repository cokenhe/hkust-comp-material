#pragma once

#include <stddef.h>

/**
 * @brief Read a line from fd.
 * 
 * Reads a line till len or '\n' from fd and save to buf, 
 * 
 * @param fd The file descriptor.
 * @param buf The destination buffer.
 * @param len Read limit.
 * @return int Number of character read.
 */
int fd_readln(int fd, char *buf, size_t len);
