define([], function () {

  var free = {
    title: 'Free Explore',
    key: 'free',
    message: 'Have fun!',
    commitData: [
        {id: 'e137e9b', tags: ['master'], message: 'first commit'},
    ]
  }

  var freeWithRemote = {
    title: 'Free Explore with Remote',
    key: 'free-remote',
    message: 'Have fun!',
    commitData: [
        {id: 'e137e9b', tags: ['master', 'origin/master'], message: 'first commit'},
    ],
    originData: [
        {id: 'e137e9b', tags: ['master'], message: 'first commit'}
    ]
  }

  var upstreamChanges = {
    title: 'Upstream Changes',
    key: 'upstream-changes',
    message: 'Someone else has been working here!',
    currentBranch: "feature",
    commitData: [
      {
        "id": "e137e9b",
        "tags": [],
        "message": "first commit",
        "parent": "initial",
      },
      {
        "id": "84c98fe",
        "parent": "e137e9b",
        "tags": [ "master", "origin/master" ],
      },
      {
        "id": "1c016b6",
        "parent": "e137e9b",
        "tags": [ "feature", "origin/feature", "HEAD" ],
      }
    ],
    originData: [
      {
        "id": "e137e9b",
        "tags": [],
        "message": "first commit",
        "parent": "initial",
      },
      {
        "id": "84c98fe",
        "parent": "e137e9b",
        "tags": [ "master", "HEAD" ],
      },
      {
        "id": "1c016b6",
        "parent": "e137e9b",
        "tags": [],
      },
      {
        "id": "fd0af32",
        "tags": [ "feature" ],
        "parent": "1c016b6",
      }
    ]
  }

  var rewrittenHistory = {
    title: 'Rewritten Remote History',
    key: 'rewritten-history',
    message: 'Someone force-pushed and re-wrote history on the remote!',
    currentBranch: "feature",
    commitData: [
      {
        "id": "e137e9b",
        "tags": [],
        "message": "first commit",
        "parent": "initial",
        "cx": 50,
        "cy": 330,
        "branchless": false
      },
      {
        "id": "84c98fe",
        "parent": "e137e9b",
        "tags": [
          "master",
          "origin/master"
        ],
        "cx": 140,
        "cy": 330,
        "branchless": false
      },
      {
        "id": "1c016b6",
        "parent": "e137e9b",
        "tags": [],
        "cx": 140,
        "cy": 240,
        "branchless": false
      },
      {
        "id": "fd0af32",
        "parent": "1c016b6",
        "tags": [],
        "cx": 230,
        "cy": 240,
        "branchless": false
      },
      {
        "id": "5041e4c",
        "tags": [
          "feature",
          "origin/feature",
          "HEAD"
        ],
        "parent": "fd0af32",
        "cx": 320,
        "cy": 240,
        "branchless": false
      }
    ],
    originData: [
      {
        "id": "e137e9b",
        "tags": [],
        "message": "first commit",
        "parent": "initial",
        "cx": 50,
        "cy": 360,
        "branchless": false
      },
      {
        "id": "84c98fe",
        "parent": "e137e9b",
        "tags": [
          "master"
        ],
        "cx": 140,
        "cy": 360,
        "branchless": false
      },
      {
        "id": "1c016b6",
        "parent": "e137e9b",
        "tags": [],
        "cx": 140,
        "cy": 270,
        "branchless": false
      },
      {
        "id": "fd0af32",
        "tags": [
          "feature",
          "HEAD"
        ],
        "parent": "1c016b6",
        "cx": 230,
        "cy": 270,
        "branchless": false
      },
      {
        "id": "5041e4c",
        "tags": [],
        "parent": "fd0af32",
        "cx": 320,
        "cy": 270,
        "branchless": true
      }
    ]

  }

  var revert = {
    title: 'Revert',
    key: 'revert',
    message: 'Oops, let\'s revert some commits',
    commitData: [
      {
        "id": "e137e9b",
        "tags": [],
        "message": "first commit",
        "parent": "initial",
        "cx": 50,
        "cy": 330,
        "branchless": false
      },
      {
        "id": "dd70cfe",
        "tags": [],
        "parent": "e137e9b",
        "cx": 140,
        "cy": 330,
        "branchless": false
      },
      {
        "id": "2545b6f",
        "tags": [],
        "parent": "dd70cfe",
        "cx": 230,
        "cy": 330,
        "branchless": false
      },
      {
        "id": "3d6ef16",
        "tags": [],
        "parent": "dd70cfe",
        "cx": 230,
        "cy": 240,
        "branchless": false
      },
      {
        "id": "077415f",
        "tags": [
          "feature"
        ],
        "parent": "3d6ef16",
        "cx": 320,
        "cy": 240,
        "branchless": false
      },
      {
        "parent2": "077415f",
        "id": "8686fb6",
        "tags": [
          "master",
          "HEAD"
        ],
        "message": "Merge",
        "parent": "2545b6f",
        "cx": 410,
        "cy": 330,
        "branchless": false
      }
    ]
  }

  var cherryPick = {
    title: 'Cherry Pick',
    key: 'cherry-pick',
    message: 'Let\'s pick some commits',
    commitData: [
      {
        "id": "e137e9b",
        "tags": [],
        "message": "first commit",
        "parent": "initial",
        "cx": 50,
        "cy": 318,
        "branchless": false
      },
      {
        "id": "790dd94",
        "tags": [],
        "parent": "e137e9b",
        "cx": 140,
        "cy": 318,
        "branchless": false
      },
      {
        "id": "96e9ce7",
        "tags": [
          "[bugfix1]"
        ],
        "parent": "790dd94",
        "cx": 230,
        "cy": 318,
        "branchless": false
      },
      {
        "id": "44db644",
        "tags": [],
        "parent": "96e9ce7",
        "cx": 320,
        "cy": 318,
        "branchless": false
      },
      {
        "id": "06127d7",
        "tags": [],
        "parent": "44db644",
        "cx": 410,
        "cy": 318,
        "branchless": false
      },
      {
        "id": "60c6c2c",
        "tags": [],
        "parent": "790dd94",
        "cx": 230,
        "cy": 228,
        "branchless": false
      },
      {
        "id": "8f7c801",
        "tags": [
          "release",
          "HEAD"
        ],
        "parent": "60c6c2c",
        "cx": 320,
        "cy": 228,
        "branchless": false
      },
      {
        "id": "78ecb32",
        "tags": [],
        "parent": "44db644",
        "cx": 410,
        "cy": 228,
        "branchless": false
      },
      {
        "id": "12e9bbb",
        "tags": [
          "bugfix2"
        ],
        "parent": "78ecb32",
        "cx": 500,
        "cy": 228,
        "branchless": false
      },
      {
        "id": "e8ce346",
        "tags": [],
        "parent": "06127d7",
        "cx": 500,
        "cy": 318,
        "branchless": false
      },
      {
        "parent2": "12e9bbb",
        "id": "5749661",
        "tags": [
          "master"
        ],
        "message": "Merge",
        "parent": "e8ce346",
        "cx": 590,
        "cy": 318,
        "branchless": false
      }
    ]
  }

  var rebase = {
    title: 'Rebasing',
    key: 'rebase',
    message: 'Try rebasing the `feature` branch',
    commitData: [
        {id: 'e137e9b', tags: ['master'], message: 'first commit'}
    ]
  }

  var basicPractice = {
    title: 'Practice with remote',
    key: 'practice-with-remote',
    message: 'Practice git commands with a remote repository</br>\
    - \`git clone\` to clone a remote repository (don\'t do this step as</br>\
      this example is already cloned)</br>\
    - \`git pull\` to pull changes from the remote repository</br>\
    - \'git commit\' to commit changes</br>\
    - \`git push\` to push changes to the remote repository</br>\
    </br>\
    Instructions: </br>\
    1. The remote is ahead by one commit, pull the changes</br>\
    2. Commit 4 changes with each commit having a different message with</br>\
       the words: \'Git\', \'Good\', \'With\', \'Adrian\'  </br>\
    3. Push the changes to the remote repository</br>',
    commitData: [
        {id: 'e137e9b', tags: ['master', 'origin/master'], message: 'first commit'},
    ],
    originData: [
    {
        "id": "e137e9b",
        "tags": [],
        "message": "first commit",
        "parent": "initial",
        "cx": 50,
        "cy": 360,
        "branchless": false
    },
    {
        "id": "7369cc0",
        "tags": [
            "master",
            "HEAD"
        ],
        "message": "Hello World",
        "parent": "e137e9b",
        "cx": 140,
        "cy": 360,
        "branchless": false
    }
]
  }

  return [
    basicPractice
  ]
})
