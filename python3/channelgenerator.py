import sys
import cmd

print("Welcome to The Channel Generator")
print("Input your Values to continue")
id = input("Input Channel Id:")
title = input("Input Channel Title:")
assets = input("Input Channel Startup Asset Directory:")
channelart = input("Input Channel Art Asset Directory:")
target = input("Input Channel Target URL:")


print("Successfully Generated Channel data")

channeldata = "{id: '"+id+"',title: '"+title+"',assets: '"+assets+"',channelart: '"+channelart+"',target: '"+target+"'}"

print(channeldata)
f = open("python3/Build/Generated/"+id+".pwcd", "x")
f.write(channeldata)
f.close()