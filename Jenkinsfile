  pipeline{
        agent any
        stages{
		stage('---clearprev---'){
                        steps{
                                sh "sudo rm -r /var/www/html/*"
                        }
                }
		stage('---pushhtml---'){
                        steps{
                                sh "sudo cp -rpf /var/lib/jenkins/workspace/1337Library/* /var/www/html"
				sh "cd /home/burnschristopher1996/projectAPI"
				sh "git pull origin master"
				sh "sudo docker-compose down"
	                        sh "sudo docker build -t='christopherburns1996:latest' ."
	                        sh "sudo docker-compose up -d"

                        }
                }
	}
}