pipeline{
        agent any
        stages{
		stage('---clearprev---'){
                        steps{
                                sh "sudo rm -r /var/www/html/*"
				sh "cd ~"
				sh "sudo rm -r projectAPI"
                        }
                }
		stage('---pushhtml---'){
                        steps{
                                sh "sudo cp -r /var/lib/jenkins/workspace/1337Library/* /var/www/html"
				sh "cd ~"
				sh "sudo git clone https://github.com/ChristopherBurns1996/projectAPI.git"
				sh "cd projectAPI"
				sh "mvn test"
				sh "mvn spring-boot:run &"
                        }
                }
	}
}