#include <assert.h>
#include <stdio.h>

#include <expression.h>

void t_exp_readln(char *ln, Expression *res)
{
    Expression e;
    exp_readln(&e, ln);
    assert(e.a == res->a);
    assert(e.b == res->b);
    assert(e.op == res->op);
    assert(e.id == res->id);
}

// written by @jhebg

/*
 * @discussion Testing exp_cal(): if the expression can calculate the correct result.
 * 
 * @param the expression to be test
 * @param the expected result 
 * 
 */
void t_exp_cal(Expression *exp, float res)
{
    assert(res == exp_cal(exp));
}

/*
 * @discussion Testing exp_valid()
 * 
 * @param the expression to be test
 * @param the expected result 
 * 
 */
void t_exp_valid(Expression *exp, bool res)
{
    assert(res == exp_vaild(exp));
}

/*
 * @discussion Testing exp_opValid()
 * 
 * @param the expression to be test
 * @param the expected result 
 * 
 */
void t_exp_opValid(char op, bool res)
{
    assert(res == exp_opVaild(op));
}

int main()
{
    printf("Testing exp_readln...");
    {
        Expression exp;
        t_exp_readln(
            "#0 1 + 1\n",
            &(Expression){.a = 1, .op = '+', .b = 1, .id = 0});
    }
    printf("pass\n");

    // written by @jhebg
    printf("Testing exp_cal...");
    {
        Expression exp;
        t_exp_cal(
            &(Expression){.a = 1, .op = '+', .b = 1, .id = 0},
            2);
    }
    printf("pass\n");

    printf("Testing exp_valid...");
    {
        Expression exp;
        t_exp_valid(
            &(Expression){.a = 1, .op = '+', .b = 1, .id = 0},
            true);
    }
    printf("pass\n");

    printf("Testing exp_opValid...");
    {
        Expression exp;
        t_exp_opValid(
            '+',
            true);
    }
    printf("pass\n");

}