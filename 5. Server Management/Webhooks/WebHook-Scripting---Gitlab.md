var res = {"content":
{   "text": " ",
    "username":" ",
    "attachments": [
        {
            "title": "",
            "title_link": "",
            "text": "",
            "image_url": "",
            "color": ""
        }
    ]
}
}

if(headers['x-gitlab-event'] === "Push Hook"){

   res.content.text= content.user_name+" pushed "+ content.total_commits_count +" commits to "+content.project.name;
 res.content.attachments[0].color="green";   
 res.content.attachments[0].title=content.user_name;
res.content.attachments[0].image_url=content.user_avatar;
}




return res;