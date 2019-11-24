# HW5 - Configuration Management and Continuous Deployment

## Initial Setup:

Install ansible in the local environment:
`sudo apt install ansible` - Ubuntu

Git clone the repository:
`git clone https://github.ncsu.edu/skundal/HW4-CS510.git`

## Setup:

**Setup the machine with required libraries and files:**

`sudo ansible-playbook setup.yaml`

![](https://github.ncsu.edu/skundal/HW4-CS510/blob/master/CS510_HW4_1.png)

## Tasks:

`sudo ansible-playbook tasks.yaml`

![](https://github.ncsu.edu/skundal/HW4-CS510/blob/master/CS510_HW4_2.png)

## Concepts:

**Explain continuous integration. How is it used on a project?**

Continuous Integration:
- In simple terms, Continuous Integration is the practice of merging all developers/ programmer's working files/directory/directories to a shared repository regularly. 
- Automatically build, test and analyze the software whenever there are commits.

Used in the project:
- Developers submit their work in form of pull requests which are then automatically build and tested so that the software doesn't break. Then these changes are merged to the main branch as frequent as possible. 
- Continuous integration puts a great emphasis on testing automation to check that the application is not broken whenever new commits are integrated into the main branch.

Benefits:
- Fast feedback loop: If a program is constructed with lack of feeback on the code or its quality, time taken to develop a software would be larger than the expected.
- Transparency: Easy to notice the contributions and changes to the commits made to the repository or project so that in case of any build failure, its easily recognizable.
- Integration: If a specific piece of code/ commit is fine on its own implementation, it is required to make sure that other modules are not broken. Continuous integration supports connecting the pieces of software every day.

**Why should developers use configuration management tools to manage their software programs? What can go wrong if they don't?**

In software engineering, configuration management tools helps developer for establishing, and maintaining, the consistency of a system or product, throughout its software development lifetime.

Software configuration management answers the five Ws, Who, What , When, Where and Why, by maintaining records of changes and what impact these changes have on the application under development as well as upgrades and releases.

The goals of Configuration Management are:
- Configuration identification
- Configuration control
- Configuration status accounting
- Configuration auditing
- Build, Process and Environment management
- Defect tracking

The following can go wrong if developers don't use configuration management:

- Accepting outdated/incorrect requirements
- Implementing incrorrect/inefficient designs
- Implementing incorrect tool for development
