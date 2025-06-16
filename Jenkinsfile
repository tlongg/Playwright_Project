pipeline {
    agent {
        label 'windows'
    }

    options {
        timeout(time: 60, unit: 'MINUTES')
    }

    triggers {
        pollSCM('* * * * *') // Optional: replace with GitHub webhook for push/PR events
    }

    stages {
        stage('Checkout Repository') {
            steps {
                checkout scm
            }
        }

        stage('Set up Node.js') {
            steps {
                // Ensure Node.js is installed on the agent
                bat 'node -v'
            }
        }

        stage('Install Dependencies') {
            steps {
                bat 'npm ci'
            }
        }

        stage('Install Playwright Browsers') {
            steps {
                bat 'npx playwright install --with-deps'
            }
        }

        stage('Run Playwright Cucumber Tests') {
            steps {
                bat 'npx cucumber-js'
            }
        }

        stage('Generate HTML Report') {
            when {
                expression { currentBuild.result == null || currentBuild.result == 'SUCCESS' || currentBuild.result == 'UNSTABLE' || currentBuild.result == 'FAILURE' }
            }
            steps {
                bat '''
                    mkdir playwright-report
                    npx cucumber-html-reporter --input cucumber-report.json --output playwright-report/index.html
                '''
            }
        }

        stage('Archive Report') {
            when {
                expression { currentBuild.result == null || currentBuild.result == 'SUCCESS' || currentBuild.result == 'UNSTABLE' || currentBuild.result == 'FAILURE' }
            }
            steps {
                archiveArtifacts artifacts: 'playwright-report/**', fingerprint: true
            }
        }
    }
}
