# Workday-Scheduler-Application

## Table of Contents

* [Description](#description)
* [Code Examples](#code-examples)
* [Important links](#important-links)
* [Languages Used](#languages-used)
* [Questions](#questions)

## Description

The purpose of this project was to create a Work Day Scheduler that fit the following Criteria:

- Allows the user to see the current day at the top of the page.

- Allows the user to have access to time bloack for the standard working hours (9:00am-5:00pm).

- Allows the user to see their time blocks color coordinated based on their time status (past, present and future).

- Allows the user to save their daily entries to local storage.

## Code Examples
Example of Code used to add styling rules to time blocks:

```js
$(".time-block").each(function(){
        var currentTime = parseInt(dayjs().format('H'));
        var blockTime = parseInt($(this).attr("id").split("-")[1]);
        console.log(blockTime);

        if(blockTime < currentTime) {
            $(this).addClass("past");
        } else if(blockTime === currentTime) {
            $(this).removeClass("past");
            $(this).addClass("present");
        } else {
            $(this).removeClass("past");
            $(this).removeClass("present");
            $(this).addClass("future");
        }
    })
```

## Important Links
[GitHub Repository](https://github.com/keekerr/Workday-Scheduler-Application)

[Deployed Application](https://keekerr.github.io/Workday-Scheduler-Application/)

![Image Example of Deployed Application](https://github.com/keekerr/Workday-Scheduler-Application/blob/main/assets/Work%20Day%20Scheduler%20Example.PNG?raw=true)

## Languages Used

![HTML Badge](https://th.bing.com/th/id/OIP._Ik4_2kbAUkc8WfirxFSLwHaHa?w=100&h=120&c=7&r=0&o=5&pid=1.7)
![CSS Badge](https://th.bing.com/th/id/OIP.bVCzXbidOak-TcOhmW0QTAHaHa?pid=ImgDet&w=100&h=120&c=7)
![JavaScript Badge](https://www.simpleimageresizer.com/_uploads/photos/8e50d6a8/java_icon_1_100x120.png)
## Questions

If you have any questions regarding this project, please feel free to contact me at this email: keeley.s.sprouse@gmail.com

Other examples of projects I have worked on can be viewed on Github via this link: [keekerr](https://github.com/keekerr)
