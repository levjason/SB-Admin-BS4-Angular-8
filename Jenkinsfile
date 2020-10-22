pipeline {
    agent {
        docker {
            image 'node:current-alpine' 
            args '-p 4200:4200' 
        }
    }
    environment {
        CI = 'true'
        HOME = '.'
    }
    stages {
        stage('Build') { 
            steps {
                sh 'npm audit fix'
                sh 'npm install' 
            }
        }
        stage('Run') {
            steps {
                sh  './jenkins/scripts/deliver.sh'
                input message: 'Finished using the web site? (Click "Proceed" to continue)'
                sh './jenkins/scripts/kill.sh'

            }
        }
    }
}