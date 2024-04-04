@Library('devopslib@main') _

def map = [:]
    map.put('GitUrl','http://code.superclub.tk/games/backend/game-plinko-forntend.git')
    map.put('NodeVersion','node:20')
    map.put('CredentialsId', 'gitlab')
    map.put('BuildCmd','npm run build')
    map.put('BuildArtifactDir','build')

frontend_deploy(map)
