## State

The State Pattern provides a way to handle state transitions of a complex object due to different operations.
Unlike the primitive and simple implementation of operations which handle state transitions straight forward, 
the state pattern provides more strong scalabily and makes it more easier to manage the state transitions.

The abstract class diagram is below. 

![class diagram](./class%20diagram.jpg)

If we try to solve similar problems with the state pattern, we need first define the concrete states and the operations leading to state transitions.

Here, I extract a demo from my actual work. In this demo, worksheets are created to record the process of solving some issues.
Worksheets are the so-called ComplexObjects in the class diagram. And they have three different states and three according operations, which can be described by the state transition diagram below.

![state transition diagram](./state.jpg)
