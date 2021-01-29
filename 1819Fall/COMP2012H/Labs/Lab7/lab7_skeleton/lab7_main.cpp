#include <iostream>
using std::cout;
using std::endl;
using std::boolalpha;

#include <string>
using std::string;

#include <utility>
using std::move;

#include "my_shared_ptr.h"



// Just a dummy class containing a string, for testing your code.
class StringWrapper {
public:
	StringWrapper(string name) : name(name) {};

	~StringWrapper() {
		cout << name << " is destroyed." << endl;
	}

	string getName() const { return name; }

private:
	const string name;
};



int main() {
	cout << boolalpha; // cout will display bool values as "true" and "false" instead of "1" and "0".



	cout << "Constructor Tests: " << endl;

    cout << "Default Constructor... ";
    my_shared_ptr<int> p1;
    bool result = ((p1.get_pointer() == nullptr) && (p1.get_count() == 0));
    cout << result << endl;

    cout << "Parameterized Constructor... ";
    int* a1 = new int{404}; // File Not Found.
    my_shared_ptr<int> p2{a1};
    result = ((p2.get_pointer() == a1) && (p2.get_count() == 1));
    cout << result << endl;

    cout << "Copy Constructor and Sharing... ";
    my_shared_ptr<int> p3{p2};
    result = ((p2.get_pointer() == a1) && (p2.get_count() == 2) &&
    		  (p3.get_pointer() == a1) && (p3.get_count() == 2));
    cout << result << endl;

    cout << "Move Constructor... ";
    my_shared_ptr<int> p4{move(my_shared_ptr<int>{p3})};
    result = ((p2.get_pointer() == a1) && (p2.get_count() == 3) &&
    		  (p3.get_pointer() == a1) && (p3.get_count() == 3) &&
			  (p4.get_pointer() == a1) && (p4.get_count() == 3));
    cout << result << endl;

    cout << endl; // End of Constructor Tests.



    cout << "Operator=() Tests: " << endl;

    cout << "Copy Assignment Operator... ";
    my_shared_ptr<int> pp5{new int};
    my_shared_ptr<int> p5 = pp5;
    p5 = p4;
    result = ((p2.get_pointer() == a1) && (p2.get_count() == 4) &&
    		  (p3.get_pointer() == a1) && (p3.get_count() == 4) &&
			  (p4.get_pointer() == a1) && (p4.get_count() == 4) &&
			  (p5.get_pointer() == a1) && (p5.get_count() == 4) &&
			  (pp5.get_count() == 1));
    cout << result << endl;

    cout << "Move Assignment Operator... ";
    my_shared_ptr<int> p6{pp5};
    p6 = my_shared_ptr<int>{p5};
    result = ((p2.get_pointer() == a1) && (p2.get_count() == 5) &&
    		  (p3.get_pointer() == a1) && (p3.get_count() == 5) &&
			  (p4.get_pointer() == a1) && (p4.get_count() == 5) &&
			  (p5.get_pointer() == a1) && (p5.get_count() == 5) &&
			  (p6.get_pointer() == a1) && (p6.get_count() == 5) &&
			  (pp5.get_count() == 1));
    cout << result << endl;

    cout << endl; // End of Operator=() Tests.



    cout << "Reset Tests: " << endl;

    cout << "reset()... ";
    p6.reset();
    result = ((p2.get_pointer() == a1) && (p2.get_count() == 4) &&
    		  (p3.get_pointer() == a1) && (p3.get_count() == 4) &&
			  (p4.get_pointer() == a1) && (p4.get_count() == 4) &&
			  (p5.get_pointer() == a1) && (p5.get_count() == 4) &&
			  (p6.get_pointer() == nullptr) && (p6.get_count() == 0));
    cout << result << endl;

    cout << "reset(T* p)... ";
    int* a2 = new int{503}; // Service Unavailable.
    p5.reset(a2);
    result = ((p2.get_pointer() == a1) && (p2.get_count() == 3) &&
    		  (p3.get_pointer() == a1) && (p3.get_count() == 3) &&
			  (p4.get_pointer() == a1) && (p4.get_count() == 3) &&
			  (p5.get_pointer() == a2) && (p5.get_count() == 1));
    cout << result << endl;

    cout << endl; // End of Reset Tests.



    cout << "Unique Tests: " << endl;

    cout << "Unique Correctness... ";
    result = p5.unique();
    cout << result << endl;

    cout << "Not Unique Correctness... ";
    result = !p4.unique();
    cout << result << endl;

    cout << endl; // End of Unique Tests.



    cout << "Swap Test: " << endl;
    cout << "swap()... ";
    p5.swap(p4);
    result = ((p4.get_pointer() == a2) && (p4.get_count() == 1) &&
			  (p5.get_pointer() == a1) && (p5.get_count() == 3));
    cout << result << endl;

    cout << endl; // End of Swap Test.



    cout << "Dereference and Pointer-to-Member Operator Tests: " << endl;

    cout << "operator*()... ";
    string sw1_name = "sw1";
    StringWrapper* sw1 = new StringWrapper{sw1_name};
    my_shared_ptr<StringWrapper> sw1_p1{sw1};
    result = ((*sw1_p1).getName() == sw1_name);
    cout << result << endl;

    cout << "operator->()... ";
    string sw2_name = "sw2";
    StringWrapper* sw2 = new StringWrapper{sw2_name};
    my_shared_ptr<StringWrapper> sw2_p1{sw2};
    result = (sw2_p1->getName() == sw2_name);
    cout << result << endl;

    cout << endl; // End of Dereference and Pointer-to-Member Operator Tests.



    cout << "Destructor Tests: " << endl;

    cout << "sw_temp should invoke destructors from sw_temp0 to sw_temp9." << endl;
    for (int i = 0; i < 10; i++) {
    	string sw_temp_name = "sw_temp";
    	char index = '0' + i;
    	string sw_temp_name_index = sw_temp_name + index;
    	StringWrapper* sw_temp = new StringWrapper{sw_temp_name_index};
    	my_shared_ptr<StringWrapper> sw_temp_p{sw_temp};
    }
    cout << endl;

    cout << "sw1 and sw2 should invoke their destructors only once when main() exits." << endl;
    my_shared_ptr<StringWrapper> sw1_p2{sw1_p1};
    my_shared_ptr<StringWrapper> sw1_p3{sw1_p1};
    my_shared_ptr<StringWrapper> sw2_p2{sw2_p1};
    my_shared_ptr<StringWrapper> sw2_p3{sw2_p1};

    cout << endl; // End of Destructor Tests.



    return 0;
}
