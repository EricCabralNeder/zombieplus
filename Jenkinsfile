pipeline {
    agent {
        docker {image "eric192/node-wd"
                args "--network=skynet"}
    }
    stages{
        stage('Build'){
            steps{
                sh "npm install"
            }
            
        }
        stage('Tests'){
            steps{
                sh "npm run test:ci"
                junit testResults: "tests_tests_output/**/*.xml"
            }
            
        }
    }
}