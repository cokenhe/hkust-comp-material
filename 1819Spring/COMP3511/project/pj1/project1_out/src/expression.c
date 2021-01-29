#include <math.h>
#include <stdio.h>

#include <expression.h>

int exp_readln(Expression *exp, char *ln)
{
    sscanf(ln, "#%u %f %c %f", &exp->id, &exp->a, &exp->op, &exp->b);
    if (exp_vaild(exp))
        return 0;
    return -1;
}

float exp_cal(Expression *exp)
{
    switch (exp->op)
    {
    case '+':
        return exp->a + exp->b;
    case '-':
        return exp->a - exp->b;
    case '*':
        return exp->a * exp->b;
    case '/':
        return exp->a / exp->b;
    default:
        return NAN;
    }
}

bool exp_vaild(Expression *exp)
{
    return exp_opVaild(exp->op);
}

bool exp_opVaild(char op)
{
    switch (op)
    {
    case '+':
    case '-':
    case '*':
    case '/':
        return true;
    default:
        return false;
    }
}