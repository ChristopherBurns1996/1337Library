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

                        }
                }
	}
}