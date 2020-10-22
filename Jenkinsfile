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
                sh 'npm audit fix'
                sh 'npm install' 
            }
        }
        stage('Run') {
            steps {
                sh 'npm run-script start'

            }
        }
    }
}