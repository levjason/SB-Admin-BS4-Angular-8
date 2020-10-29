pipeline {
    agent {
        docker {
            image 'vieux/node:latest'
            args '-p 4200:4200 '
        }
    }
    environment {
        CI = 'true'
        HOME = '.'
    }
    stages {
        stage('Build') {
            steps {
                sh 'npm install'
            }
        }
        stage('Test') {
            steps {
                sh  './jenkins/scripts/test.sh'
            }
        }
        stage('e2e') {
            steps {
                sh  './jenkins/scripts/e2e.sh'
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
