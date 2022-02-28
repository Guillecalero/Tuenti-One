# Tuenti-One
| HTTP Method | URI path                       | Description                                |      Protected |
| :---         |   :---:                       |          ---:                              |           ---: |
| GET          | /                             | Render Loggin form               |                False     |
| GET          | /resgister               |Render register form                  |      False     |
| POST          | /register               |Handle register form                  |      False     |
| GET          | /home               |Render home page                  |      true     |
| GET          | /profile              |Render profile page                  |      false     |
| POST          | /profile/uploadphoto-form              |Handle form for uploadphoto                  |      true     |
| POST          | /profile/upload-form              |Handle form for publish text                 |      true     |
| GET          | /profile/:username/edit              |Render form profile edit page                 |      true     |
| PUT          | /profile/:username/edit              |Handle form profile edit page                 |      true     |
| GET      | /discover            |Render list of registered people              |      true     |
| PUT         | /discover          |Handle add-new-friend button            |      true     |
| GET         | /friends       |Render your friends list|      true     |
