## High-level Overview - Angular Process

- AngularJS is included and executed.
![Alt text](image.png)


- Angular module gets created (if added).
![Alt text](image-1.png)


- Find 'Templates'
    - *Template* -> HTML with some angular markup
        - 'ng-*' attributes (directives)
        - Evaluating expressions,
        - data-binding markup etc.
![Alt text](image-2.png)


- Processes template
    - Compiles template (for errors)
    - Loads template (instance) in memory
    - Transforms template with data
        - data binding
        - Evaluation of expressions
![Alt text](image-3.png)


- Renders to DOM Tree (View)
![Alt text](image-4.png)


## Angular JS - Controllers

- *Controllers* are JavaScript objects which contain application logic.
    - Usually defined as part of angular module.
    ![Alt text](image-5.png)


- Allows us to send/receive data between DOM (say Views) and application logic.
    ![Alt text](image-6.png)

- Usually attached to a DOM element using 'ng-controller' attribute (directive)
    ![Alt text](image-7.png)

- In other words, exposes data (Model) to be consumed by Views (one-way data binding) [*MVC pattern*]
    - Also sends takes data from Views (two-way data-binding)
    ![Alt text](image-8.png)


## Controllers - Conceptual Diagram
![Alt text](image-9.png)