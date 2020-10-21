pipeline {
    agent {
        docker {
            image 'node:current-alpine' 
            args '-p 4200:4200' 
        }
    }
    environment {
        CI = 'true'
    }
    stages {
        stage('Build') { 
            steps {
                sh 'npm install' 
            }
        }
         stage('Test') {
            steps {
                sh 'npm run-script test'
            }
        }
        stage('Run') {
            steps {
                sh 'npm run-script start'

            }
        }
    }
}