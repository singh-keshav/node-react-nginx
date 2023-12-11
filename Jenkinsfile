pipeline {
    agent any
    stages {
        stage('Build') { 
            steps {
                sh 'docker build .' 
            }
        }
        stage('test') { 
            steps {
                echo "testing application"
            }
        }
        stage('deploy') { 
            steps {
                echo "deploying it.." 
            }
        }
    }
}
