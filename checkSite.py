import sys, os, time, httplib2



def checkSite():
	conn = httplib2.HTTPConnection('www.ostrowski.ca')
	conn.request("HEAD", "/")
	response = conn.getresponse()
	print(response.status, response.reason)

	checkSite()