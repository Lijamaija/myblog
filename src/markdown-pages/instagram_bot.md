---
title: "Instagram Bot Creation using Python and Selenium"
date: "2021-04-09"
description: "Detailed instruction on how to use XPATH and automate browser operations."
---

As a part of my art instagram promotion, I decided to automate this process and wrote a small python code that does exactly this. As you probably know, the easiest way
to get instagram activity and gain likes is to simulate active account that likes, comments and reacts in return. 
The script uses a few important technologies that you have to have preinstalled :

- python 
- selenium webrowser plugin
- selenium driver or have it automatically installed in the script (mine does it)

In order to write this script, you have to be able to access different elements of the webpage and there are numerous ways to do this.
First of all, selenium browser automation documentation. You can find out more on official resources: https://www.selenium.dev/documentation/en/webdriver/web_element/
>Typically, you're using instance of active browser(driver) and applying different functions on it, such as  find_element(By.NAME), then older versions such as find elemen by css selector, and finally option that I found the most convenient - find element by xpath("//button[text()='Accept']").
It gives you the exact element without much hassle of looking for similar HTML components. 

**How to find XPATH?**

Just simply open the webpage that you want to automate(in our case, instagram), then click on inspect, then click on the particular element which would be highlighted by the inspector and then there will be an option to get the element's XPATH. 
