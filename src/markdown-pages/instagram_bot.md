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
Typically, you're using instance of active browser(driver) and applying different functions on it, such as **find_element(By.NAME)**, then older versions such as **find_element_by_css_selector**, and finally option that I found the most convenient - find_element_by_xpath("//button[text()='Accept']").
It gives you the exact element without much hassle of looking for similar HTML components. 

>**How to find XPATH?**

Just simply open the webpage that you want to automate(in our case, instagram), then click on inspect, then click on the particular element which would be highlighted by the inspector and then there will be an option to get the element's XPATH. 

![XPATH](images\Screenshot (2)_LI.jpg)

So summing up, here is a code that I wrote, with minor changes it can simulate even more different kinds of activity. 


>from random import randint
>from time import sleep

>from selenium import webdriver
>from selenium.webdriver.common.keys import Keys

>from webdriver_manager.chrome import ChromeDriverManager

>browser = webdriver.Chrome(ChromeDriverManager().install())
>browser.implicitly_wait(10)

>browser.get('https://www.instagram.com/')
>sleep(2)
># accepting cookies
>cookie_button = browser.find_element_by_xpath("//button[text()='Accept']")
>cookie_button.click()

>username_input = browser.find_element_by_css_selector("input[name='username']")
>password_input = browser.find_element_by_css_selector("input[name='password']")

>#your username input goes here
>username_input.send_keys("")
>#your password input goes here
>password_input.send_keys("")

>login_button = browser.find_element_by_xpath("//button[@type='submit']")
>login_button.click()

>sleep(3)
># accepting not now button
>save_login_info_button = browser.find_element_by_xpath("//button[text()='Not Now']")
>save_login_info_button.click()
>sleep(3)
>notification_button = browser.find_element_by_xpath("//button[text()='Not Now']")
>notification_button.click()

>#hastag list can be updated, this is just an example of 2 hashtags that I happen to like
>hashtag_list = ['inktober', 'drawthisinyourstyle']


>tag = -1
>followed = 0
>likes = 0
>comments = 0
try:
    for hashtag in hashtag_list:
        tag += 1
        browser.get('https://www.instagram.com/explore/tags/' + hashtag_list[tag] + '/')
        sleep(5)
        first_thumbnail = browser.find_element_by_xpath(
            '//*[@id="react-root"]/section/main/article/div[1]/div/div/div[1]/div[1]/a/div')

        first_thumbnail.click()
        sleep(randint(1, 2))
except Exception as e:
    print(e)
try:
    for x in range(1, 200):
        # username = browser.find_element_by_xpath(
        # '//*[@id="react-root"]/section/main/article/div[2]/div[1]/header/div[2]/div[1]/div[1]/span/a').text

        # if username not in prev_user_list:
        #     # If we already follow, do not unfollow
        if browser.find_element_by_xpath(
                '/html/body/div[5]/div/div/article/div[2]/div[1]/header/div[2]/div[1]/div[2]/button').text == 'Follow':

            browser.find_element_by_xpath(
            '/html/body/div[5]/div/div/article/div[2]/div[1]/header/div[2]/div[1]/div[2]/button').click()
        sleep(5)
        # new_followed.append(username)
        followed += 1

        # Liking the picture
        button_like = browser.find_element_by_xpath(
            '/html/body/div[5]/div/div/article/div[2]/div[2]/div/section[3]/span[1]/button')
>
 >       button_like.click()
 >       likes += 1
 >       sleep(randint(18, 25))
>
 >       comment_box = browser.find_element_by_xpath(
 >           '/html/body/div[5]/div/div/article/div[2]/div[2]/div/section[2]/div/form/textarea')
 >       comment_box.send_keys('Really cool!')
 >       sleep(5)
 >       comment_box.send_keys(Keys.ENTER)
>
>except Exception as e:
   > print(e)
>
>print('Liked {} photos.'.format(likes))
>print('Commented {} photos.'.format(comments))
>print('Followed {} new people.'.format(followed))
