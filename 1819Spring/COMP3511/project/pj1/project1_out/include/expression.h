#pragma once

#include <stdbool.h>

/**
 * @brief Representation of a expression. Stores the # id of the expression, the two floating point operands and the operation. 
 * 
 */
typedef struct
{
    int id;
    float a;
    char op;
    float b;
} Expression;

/**
 * @brief Read a line of expression.
 * 
 * exp_readln reads ln and scans for the expression id, the two operand and the 
 * operation, and save the result to exp.
 * 
 * For example, ln = "#14 5.8 - 4.2\n", the function reads ln and save 
 * exp->id = 14, exp->a = 5.8, exp->op = '-', exp->b = 4.2 and return 0.
 * 
 * @param exp Target expression struct to save to.
 * @param ln Line to read.
 * @return int 0 on success, -1 on fail.
 */
int exp_readln(Expression *exp, char *ln);

/**
 * @brief Gives the result of the expression.
 * 
 * @param exp The expression.
 * @return float The result of calculation.
 */
float exp_cal(Expression *exp);

/**
 * @brief Check if the expression operation is valid.
 * 
 * @param exp The expression.
 * @return true The expression operation is valid, i.e. exp->op is either 
 * '+', '-', '*', '/'
 * @return false The expression operation is invalid, i.e. exp->op is not 
 * '+', '-', '*' nor '/'
 */
bool exp_vaild(Expression *exp);

/**
 * @brief Check if the operation is valid.
 * 
 * @param op The operation.
 * @return true The operation is valid, i.e. exp->op is either 
 * '+', '-', '*', '/'
 * @return false The operation is invalid, i.e. exp->op is not 
 * '+', '-', '*' nor '/'
 */
bool exp_opVaild(char op);