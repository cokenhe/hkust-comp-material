package comp3111.labs.lab7;

import static org.junit.Assert.*;

import org.junit.Test;


public class AnimalTest {

	@Test
	public void testInitWeight() {
		Animal a = new Animal();
		assertEquals((int)a.getWeight(), 5);
	}
	
	@Test
	public void testDieByFeedingTooMuch() {
		Animal a = new Animal();
		for (int i = 0; i < 100; i++)
			a.eat();
		assertEquals(a.isAlive(), false);
	}

}
