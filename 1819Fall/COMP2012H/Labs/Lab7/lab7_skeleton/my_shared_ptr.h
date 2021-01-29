#ifndef MY_SHARED_PTR_H_
#define MY_SHARED_PTR_H_

#include <utility>
using std::move;


#include <iostream>
using namespace std;

template <typename T>
class my_shared_ptr {
public:
	/*******************************
	 * Constructors and Destructor *
	 *******************************/

	// Default Constructor, p is empty.
	my_shared_ptr() :
		p(nullptr),
		use_count(nullptr) {}

	// Parameterized Constructor, takes ownership of p.
	/*
	 * Note: There exists the issue of 2 my_shared_ptrs thinking they have single and separate ownership of the same object.
	 * We ignore this for the sake of lab simplicity, as it is a complex problem to solve.
	 */
	my_shared_ptr(T* p) :
		p(p),
		use_count(new unsigned int {1}) {}

	// Copy Constructor, shares p.
	my_shared_ptr(const my_shared_ptr<T>& x) :
		p(x.p),
		use_count(x.use_count) {
			if (use_count) 
				*use_count += 1;
		}

	// Move Constructor, x becomes empty.
	my_shared_ptr(my_shared_ptr<T>&& x) : my_shared_ptr() {
		swap(x); // this is Default Constructed, then this and x swap contents. x will have its Destructor called at the end of this function scope.
	}

	// Destructor, decrement use_count and deallocate memory if this is the last my_shared_ptr.
	~my_shared_ptr() {
		if (use_count && --(*use_count) == 0) {
			delete use_count;
			delete p;
		}
		use_count = nullptr;
		p = nullptr;
	}



	/************************
	 * Operator Overloading *
	 ************************/

	// Copy Assignment Operator, shares p.
	// Bonus Task: Implement with C++11 Move-Semantics by reusing the Copy Constructor and Move Assignment Operator.
	my_shared_ptr& operator=(const my_shared_ptr<T>& x) {
		if (this == &x) return *this;

		this->reset();
		*this = my_shared_ptr {x};
		return *this;
	}

	// Move Assignment Operator, x becomes empty.
	my_shared_ptr& operator=(my_shared_ptr<T>&& x) {
		this->swap(x); // Swap previous contents with x, which will have its Destructor called at the end of this function scope.
		return *this;
	}

	// Dereference Operators.
	T& operator*() const {
		return *p;
	}

	T* operator->() const {
		return p;
	}



	/*********************
	 * Utility Functions *
	 *********************/

	T* get_pointer() const { return p; }
	int get_count() const { return ((p == nullptr)? 0 : *use_count); }

	bool unique() const {
		if (use_count == nullptr) return false;
		return *use_count == 1;
	}

	// Remember to decrement use_count and deallocate memory if this is the last my_shared_ptr.
	// Bonus Task: Implement with C++11 Move-Semantics.
	void reset() {
		my_shared_ptr temp = move(*this);
	}

	void reset(T* p) {
		this->reset();

		this->p = p;
		use_count = new unsigned int {1};
	}

	// Hint: You may use this function when attempting the Bonus Task.
	void swap(my_shared_ptr<T>& x) {
		my_shared_ptr temp {*this};

		p = x.p;
		use_count = x.use_count;

		x.p = temp.p;
		x.use_count = temp.use_count;
	}



private:
	T* p;
	unsigned int* use_count;
};

#endif /* MY_SHARED_PTR_H_ */
