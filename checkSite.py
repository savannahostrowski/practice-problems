import requests, sched, time, smtplib

s = sched.scheduler(time.time, time.sleep)
site = 'http://www.ostrowski.ca'

def siteCheck(url, sc):
	print(time.time())
	r = requests.head(url)
	if r.status_code == 200:
		print(r.status_code)
		emailTextMe()
	sc.enter(10,1, siteCheck, (sc,))

s.enter(10,1,siteCheck, (s,))
s.run()

def emailTextMe():
	server = smtplib.SMTP('stmp.gmail.com', 587)
	server.starttls()
	server.login('email', 'password')
	msg = 'Site update: http://www.ostrowski.ca has yielded\
		   a status other than 200'
	server.sendmail('email',
	 				'email', msg)
	server.sendmail('???', '5199981350@msg.telus.com', msg)
	server.quit()
