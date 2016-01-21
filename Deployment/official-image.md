## Official docker hub image work-in-progress
  

Resource Repository: [Link to files] (https://github.com/RocketChat/Deploy.to.Cloud/tree/master/OfficialImage)  
  
`Dockerfile` is the final image builder, currently under minor revision.

`maketar.sh` will become our build workflow (part of CI) after a release, creating a deployable `.tgz` file - downloadable behind an https server. 

* this script will generate a detached signature file with extension `.asc`.  This file must be moved to the same directory as the `.tgz` file.

`version v0.4.0` is just a place-holder version tag :  until CI workflow is in place.

###NOTE

This Docker file is complete and tested with:

* HTTPS download with gpg signature verification via fingerprinted public key retrieved from key server
* a  buildmaster@rocket.chat identity + email account (to replace sli@makawave.com), gpg key generation, and key publication on public server

This is the highest security level 'preferred' by the offical image review.  We are now just pending:

* CI build process, pushing tagged release `.tgz` to CDN served over HTTPS

