import requests, sched, time, smtplib

s = sched.scheduler(time.time, time.sleep)
site = 'http://www.ostrowski.ca'
sender = 'savannahostrowski@gmail.com'
receivers = 'savannahostrowski@gmail.com'
msg = '\r \n'. join([ 'From: savannahostrowski@gmail.com',
					  'To: savannahostrowski@gmail.com',
					  'Subject: Site is Down!',
					  '',
					  'Site update: http://www.ostrowski.ca has yielded a status other than 200'
					])
username = 'savannahostrowski@gmail.com'
password = '...'

def emailMe():
	try:
		server = smtplib.SMTP('smtp.gmail.com:587')
		print('server is setup')
		server.ehlo()
		server.starttls()
		server.login(username, password)
		server.sendmail(sender,receivers, msg)
		server.quit()
		print('Successfully sent email')
	except smtplib.SMTPException:
		print ('Error: unable to send email')

def siteCheck(url, sc):
	r = requests.head(url)
	if r.status_code != 200:
		print(r.status_code)
		emailMe()
	sc.enter(5,1, siteCheck, (url, sc,))

s.enter(5,1,siteCheck, (site,s,))
s.run()
