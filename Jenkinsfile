pipeline {
    agent any

    options {
        skipDefaultCheckout()
        timeout(time: 10, unit: 'MINUTES')
        timestamps()

    }



    stages {



      stage('Checkout') {
            steps {
                checkout scm

            }
      }

        stage('Build') {
            steps {


                echo 'Build'
                script {


                    repoUrl= gitRepoURL()
                    branchName = gitBranchName()
                    ispr = isGitPRBranch()
                      echo "${repoUrl} ${branchName} ${ispr}"
                      sh "source ~/.bash_profile"
                      sh "nvm install 10.7.0"
                      sh "nvm use 10.7.0"
                      sh "npm install"

                }

            }
        }

        stage('Unit Test') {
            steps {
                 parallel(
                        "UnitTest ": {
                            echo 'Run Units tests'

                        },
                         "Security Test ": {
                            echo 'Run integration testing'
                        }

                )
            }
        }



        stage('Build Docker') {
            when {
                branch 'master'
            }
            steps {
                sh 'docker build . -t 550522744793.dkr.ecr.us-east-1.amazonaws.com/rfadui:${BUILD_NUMBER}'
                sh 'docker tag 550522744793.dkr.ecr.us-east-1.amazonaws.com/rfadui:${BUILD_NUMBER} 550522744793.dkr.ecr.us-east-1.amazonaws.com/rfadui:latest'
                sh '/home/jenkins/ecr-login.sh | /bin/bash '
                sh 'docker push 550522744793.dkr.ecr.us-east-1.amazonaws.com/rfadui:${BUILD_NUMBER}'
                sh 'docker push 550522744793.dkr.ecr.us-east-1.amazonaws.com/rfadui:latest'
            }
        }

        stage('Dev Deploy') {

                when {
                branch 'master'
            }

            steps {

               sh 'ecs-deploy  -c DevCluster1 -n rfadui -i 550522744793.dkr.ecr.us-east-1.amazonaws.com/rfadui:${BUILD_NUMBER} -r us-east-1 -t 180'

            }

        }

        stage('DEV Test') {
            when {
                branch 'master'
            }
            steps {

                parallel(
                        "Integration Test ": {
                            echo 'Run integration tests'
                        },
                         "Functional Test ": {
                            echo 'Run integration tests'
                        }

                )
            }
        }

         stage('QA deploy') {
             when {
                branch 'master'
            }

            steps {
                echo 'Deploy QA'
                echo 'Sanity Checks'
            }

        }

        stage('QA Functional Tests') {
            when {
                branch 'master'
            }
            steps {
                echo 'Unit Test'
            }
        }


         stage('Performance TEST') {
            when {
                branch 'master'
            }
            steps {
                echo 'Deploy QA'
                echo 'Sanity Checks'
            }

        }


        stage('Deploy Stage') {
           when {
                branch 'master'
            }
            steps {
                echo 'deploy stage'
                echo ' Stage Sanity Checks'
            }
        }
    }
    post {
        always {
            echo 'Always'


        }

        failure {
            echo 'Failed'

        }

        success {
            echo 'Success!'

                script {
                    if (isGitPRBranch()) {


                            sendSlackNotification("SUCCESS","",true)

                            }
                }

        }

        unstable {
            echo 'Unstable'
        }

    }
}
