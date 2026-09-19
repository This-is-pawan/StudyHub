GOAL
----
Build a real-world student preparation platform in 1-2 months using:
- Next.js (App Router)
- React
- Node.js API routes / Route Handlers
- MongoDB + Mongoose
- Cloudinary for images/videos/documents
- NextAuth/Auth.js or Clerk for authentication
- Tailwind CSS
- Vercel deployment

The app should help a student do almost everything in one place:
- Create timetable
- Make todos/tasks
- Save notes
- Save YouTube videos
- Upload images/videos/PDF/documents
- Create folders
- Share notes/files/folders
- Track study progress
- Search saved content
- Build a personal study dashboard

IMPORTANT MVP RULE
------------------
Do not build everything at once.

Version 1 should only have:
1. Auth
2. Dashboard
3. Timetable
4. Tasks
5. Notes
6. Resources / Files
7. YouTube Links
8. Share Link
9. Profile / Settings

After this works properly, add:
- Notifications
- Study streak
- Calendar
- Analytics
- Collaboration
- Public community
- AI features

==================================================
1. PRODUCT STRUCTURE
==================================================

Main user journey:

Landing Page
   ->
Sign Up / Login
   ->
Onboarding
   ->
Dashboard
   ->
Create timetable / note / task / resource
   ->
Save data
   ->
Upload file to Cloudinary if needed
   ->
Store Cloudinary URL + metadata in MongoDB
   ->
View / edit / delete / share
   ->
Track study progress

==================================================
2. ROUTES / PAGES
==================================================

PUBLIC ROUTES
-------------

/
Landing Page

Sections:
- Navbar
- Hero section
- "Plan. Learn. Save. Share."
- Main CTA: Start for Free
- Feature cards
- Product screenshots
- How it works
- FAQ
- Footer

/login
- Email
- Password
- Google login
- Forgot password link
- Create account link

/register
- Name
- Email
- Password
- Confirm password
- Google signup

/forgot-password
/reset-password

/privacy
/terms
/contact
/about

AUTHENTICATED APP ROUTES
------------------------

/app
Dashboard

Dashboard UI:
- Greeting
- Today's date
- Today's schedule
- Pending tasks
- Study progress
- Recent notes
- Recent files
- Saved videos
- Quick add button
- Study streak
- Upcoming deadlines

/app/timetable
Timetable list

UI:
- Weekly timetable
- Day tabs
- Subject cards
- Start time
- End time
- Edit/Delete
- Add class/study block

/app/timetable/new
Create timetable item

Fields:
- Subject
- Topic
- Date
- Repeat days
- Start time
- End time
- Color
- Reminder
- Notes

/app/tasks
Todo / task manager

Filters:
- Today
- Upcoming
- Completed
- Overdue
- Subject
- Priority

Task card:
- Checkbox
- Task title
- Subject
- Due date
- Priority
- Edit
- Delete

/app/tasks/new

/app/notes
Notes list

UI:
- Search
- Grid/list switch
- Folder filter
- Tag filter
- Pinned notes

/app/notes/new
Rich text editor

Fields:
- Title
- Content
- Subject
- Folder
- Tags
- Attachments
- Pin note

/app/notes/[noteId]
View note

Actions:
- Edit
- Delete
- Share
- Download
- Copy link

/app/notes/[noteId]/edit

/app/resources
Central file/resource library

Tabs:
- All
- Images
- Videos
- Documents
- PDFs
- Links
- YouTube

Features:
- Search
- Sort
- Filter
- Upload
- Folder
- Share
- Delete
- Preview

/app/resources/upload

Upload UI:
- Drag & drop
- Select files
- File type
- Upload progress
- Title
- Description
- Subject
- Folder
- Tags

/app/resources/[resourceId]
Resource detail

Show:
- Preview
- Filename
- File type
- Size
- Upload date
- Subject
- Folder
- Tags
- Share button
- Download
- Delete

/app/videos
Saved YouTube videos

Card:
- YouTube thumbnail
- Title
- Channel
- Subject
- Playlist/folder
- Status: Not Started / Watching / Completed
- Notes
- Open on YouTube

/app/videos/new
Fields:
- YouTube URL
- Title
- Subject
- Folder
- Notes

/app/folders
All folders

/app/folders/[folderId]
Folder detail:
- Notes
- Resources
- YouTube videos
- Tasks

/app/calendar
Monthly / weekly calendar

Show:
- Timetable
- Tasks
- Exam dates
- Deadlines

/app/progress
Study progress

Charts:
- Tasks completed
- Study sessions
- Subjects
- Weekly progress
- Streak

/app/share
Items you shared

/app/shared-with-me
Items other users shared with you

/share/[shareToken]
Public share page

This page should work without login if owner allows public sharing.

Possible content:
- Note
- File
- Folder
- Study plan

/app/search
Global search

Search:
- Notes
- Files
- Tasks
- Videos
- Folders

/app/profile
- Name
- Photo
- Bio
- Exam preparing for
- Target date

/app/settings
Tabs:
- Account
- Appearance
- Notifications
- Storage
- Privacy
- Delete account

==================================================
3. MAIN APP LAYOUT
==================================================

Desktop:

LEFT SIDEBAR
- Logo
- Dashboard
- Timetable
- Tasks
- Notes
- Resources
- Videos
- Folders
- Calendar
- Progress
- Shared
- Settings

TOP BAR
- Search
- Quick Add
- Notification
- Profile avatar

MOBILE
- Bottom navigation:
  Dashboard
  Tasks
  Add
  Resources
  Profile

==================================================
4. COMPONENTS
==================================================

components/
  ui/
    Button
    Input
    Modal
    Dialog
    Dropdown
    Card
    Badge
    Tabs
    Avatar
    Progress
    Skeleton

  layout/
    Sidebar
    Topbar
    MobileNav
    AppShell

  dashboard/
    TodaySchedule
    PendingTasks
    RecentNotes
    RecentResources
    ProgressCard
    StudyStreak

  timetable/
    TimetableGrid
    StudyBlock
    TimetableForm

  tasks/
    TaskCard
    TaskList
    TaskFilters
    TaskForm

  notes/
    NoteCard
    NoteEditor
    NoteToolbar
    NoteFilters

  resources/
    ResourceCard
    ResourceGrid
    UploadModal
    FilePreview
    FileFilters
    UploadProgress

  videos/
    VideoCard
    VideoForm

  sharing/
    ShareModal
    SharePermissionSelector

==================================================
5. DATABASE MODELS
==================================================

User
----
_id
name
email
passwordHash
image
examTarget
targetDate
createdAt
updatedAt

TimetableItem
-------------
_id
userId
subject
topic
date
repeatDays[]
startTime
endTime
color
reminder
notes
createdAt

Task
----
_id
userId
title
description
subject
priority
status
dueDate
completedAt
createdAt

Note
----
_id
userId
title
content
plainText
subject
folderId
tags[]
isPinned
createdAt
updatedAt

Folder
------
_id
userId
name
description
parentFolderId
color
createdAt

Resource
--------
_id
userId
title
description
type
mimeType
cloudinaryPublicId
cloudinaryUrl
secureUrl
originalFilename
bytes
folderId
subject
tags[]
createdAt

SavedVideo
----------
_id
userId
youtubeUrl
youtubeVideoId
title
thumbnail
channel
subject
folderId
status
notes
createdAt

Share
-----
_id
ownerId
resourceType
resourceId
shareToken
permission
isPublic
expiresAt
createdAt

==================================================
6. CLOUDINARY FLOW
==================================================

Use Cloudinary for:
- Images
- Videos
- PDFs
- Documents where supported as raw files

MongoDB should NOT store large binary files.

MongoDB stores:
- Cloudinary public_id
- secure_url
- filename
- type
- size
- userId
- metadata

Upload flow:

Browser
  ->
Your Next.js server requests/creates signed upload data
  ->
Browser uploads directly to Cloudinary
  ->
Cloudinary returns public_id + secure_url + file metadata
  ->
Your server saves metadata in MongoDB

For production:
- Prefer signed uploads
- Never expose Cloudinary API secret in browser
- Check user authentication
- Restrict upload size
- Restrict allowed file types
- Use per-user folders such as:
  studyhub/{userId}/images
  studyhub/{userId}/videos
  studyhub/{userId}/documents

Useful file restrictions:
Images: jpg, jpeg, png, webp
Videos: mp4, webm
Documents: pdf, doc, docx, ppt, pptx, txt
Spreadsheets: xls, xlsx, csv

Start simple:
- Maximum image: 10 MB
- Maximum document: 20 MB
- Maximum video: 100 MB

Adjust later according to your Cloudinary plan.

==================================================
7. API ROUTES
==================================================

/api/auth/*

/api/timetable
GET
POST

/api/timetable/[id]
GET
PATCH
DELETE

/api/tasks
GET
POST

/api/tasks/[id]
GET
PATCH
DELETE

/api/notes
GET
POST

/api/notes/[id]
GET
PATCH
DELETE

/api/folders
GET
POST

/api/folders/[id]
GET
PATCH
DELETE

/api/resources
GET
POST

/api/resources/[id]
GET
PATCH
DELETE

/api/resources/sign
POST
Generate Cloudinary signed upload parameters

/api/videos
GET
POST

/api/videos/[id]
GET
PATCH
DELETE

/api/share
POST

/api/share/[token]
GET

/api/search
GET

/api/dashboard
GET

==================================================
8. PROJECT FOLDER STRUCTURE
==================================================

src/
  app/
    (public)/
      page.tsx
      login/
      register/
      about/
      privacy/
      terms/

    (dashboard)/
      app/
        layout.tsx
        page.tsx
        timetable/
        tasks/
        notes/
        resources/
        videos/
        folders/
        calendar/
        progress/
        share/
        shared-with-me/
        search/
        profile/
        settings/

    share/
      [shareToken]/

    api/
      auth/
      timetable/
      tasks/
      notes/
      folders/
      resources/
      videos/
      share/
      search/
      dashboard/

  components/
  lib/
    db.ts
    auth.ts
    cloudinary.ts
    validations.ts
    utils.ts

  models/
    User.ts
    Task.ts
    Note.ts
    Resource.ts
    Folder.ts
    TimetableItem.ts
    SavedVideo.ts
    Share.ts

  hooks/
  types/
  constants/

==================================================
9. UI DESIGN SYSTEM
==================================================

Style:
- Clean
- Modern
- Student friendly
- Calm
- Not overly colorful
- Lots of whitespace

Suggested:
- Background: very light neutral
- Cards: white
- Primary accent: indigo / blue
- Success: green
- Warning: amber
- Danger: red

Typography:
- Inter or Geist

Border radius:
- 12px to 16px

Main card pattern:
Title
Small description
Primary content
Action

Avoid:
- Too many gradients
- Too many animations
- Crowded dashboard
- 10 different colors

==================================================
10. 8-WEEK BUILD PLAN
==================================================

You said:
2 hours daily
1-2 months

Recommended:
8 weeks x 6 days
One rest/revision day each week

TOTAL:
Around 96 focused hours

-----------------
WEEK 1 - FOUNDATION
-----------------

Goal:
Project structure + UI foundation

Day 1
- Decide final name
- Write features
- Create GitHub repo
- Create Next.js project
- Setup TypeScript
- Setup Tailwind

Day 2
- Create design system
- Button
- Input
- Card
- Modal
- Badge

Day 3
- Build dashboard layout
- Sidebar
- Topbar
- Mobile navigation

Day 4
- Build landing page

Day 5
- Build login/register UI

Day 6
- Responsive fixes
- Clean folders

Day 7
- Review only

-----------------
WEEK 2 - AUTH + DATABASE
-----------------

Day 1
- Setup MongoDB Atlas
- Mongoose connection

Day 2
- User model
- Authentication

Day 3
- Protected routes

Day 4
- Profile page

Day 5
- Settings page

Day 6
- Test authentication completely

-----------------
WEEK 3 - TIMETABLE + TASKS
-----------------

Day 1
- Timetable DB model + API

Day 2
- Timetable UI

Day 3
- Create/edit/delete timetable

Day 4
- Task DB model + API

Day 5
- Tasks UI

Day 6
- Complete task filters

-----------------
WEEK 4 - NOTES + FOLDERS
-----------------

Day 1
- Notes model

Day 2
- Notes list

Day 3
- Note editor

Day 4
- Edit/delete/pin

Day 5
- Folder system

Day 6
- Search/filter notes

-----------------
WEEK 5 - CLOUDINARY RESOURCES
-----------------

Day 1
- Create Cloudinary account
- Setup env variables
- Test image upload

Day 2
- Signed upload API
- Save upload metadata in MongoDB

Day 3
- Build resource library UI

Day 4
- Image/file preview

Day 5
- Delete resource
- Remove from MongoDB + Cloudinary

Day 6
- Upload progress
- Validation
- Error states

-----------------
WEEK 6 - YOUTUBE + SHARING
-----------------

Day 1
- Saved YouTube model

Day 2
- Add YouTube URL
- Parse video ID
- Show thumbnail

Day 3
- Video list/filter

Day 4
- Share model/token

Day 5
- Public share route

Day 6
- Share modal + copy link

-----------------
WEEK 7 - DASHBOARD + SEARCH
-----------------

Day 1
- Dashboard API

Day 2
- Today's timetable

Day 3
- Pending tasks + recent notes/files

Day 4
- Global search backend

Day 5
- Search UI

Day 6
- Loading states + skeletons

-----------------
WEEK 8 - PRODUCTION
-----------------

Day 1
- Security review
- Validation
- Rate limiting

Day 2
- Mobile responsive review

Day 3
- Empty states
- Error pages
- 404

Day 4
- SEO landing page
- Privacy
- Terms

Day 5
- Deploy to Vercel

Day 6
- Production testing
- Fix bugs

Day 7
- Launch

==================================================
11. DAILY 2-HOUR ROUTINE
==================================================

Every project day:

00:00 - 00:10
Read today's goal.
Do not start random features.

00:10 - 00:30
Read docs / plan implementation.

00:30 - 01:30
Build one feature.

01:30 - 01:50
Test it manually.

01:50 - 02:00
Commit to GitHub.
Write tomorrow's next step.

Rule:
Do not watch tutorials for 2 hours.
Use maximum 20-30 minutes for learning.
Spend most time building.

==================================================
12. FIRST 10 THINGS TO BUILD
==================================================

Build in exactly this order:

1. Create Next.js app
2. App layout
3. Sidebar/topbar
4. Login/register
5. MongoDB
6. Authentication
7. Timetable
8. Tasks
9. Notes
10. Cloudinary resource upload

Do NOT start:
- AI
- Chat
- Notifications
- Analytics
- Real-time collaboration
- Community
before these are stable.

==================================================
13. FIRST VERSION OF DASHBOARD
==================================================

Top:
"Good evening, Prince"
"Here is your study plan for today"

Cards:
1. Today's Study Time
2. Tasks Completed
3. Current Streak
4. Upcoming Exam

Middle:
- Today's timetable
- Pending tasks

Bottom:
- Recent notes
- Saved resources
- Saved YouTube videos

Quick Add:
+ Task
+ Note
+ Timetable
+ Resource
+ YouTube Link

==================================================
14. REAL-LIFE STUDENT EXAMPLE
==================================================

Suppose a student prepares for Punjab Patwari.

Folders:
Punjab Patwari
  Maths
  Reasoning
  Punjabi
  English
  Computer
  Punjab GK
  Current Affairs

Inside Maths:
- Algebra notes
- Percentage PDF
- YouTube lecture link
- Screenshot
- Formula image
- Practice sheet
- Tasks

Timetable:
08:00 - Maths
09:30 - Reasoning
11:00 - Punjabi
14:00 - Punjab GK

Task:
"Complete percentage chapter"
Due: Sunday

Saved YouTube:
"Percentage Tricks"
Status: Watching

Note:
"Percentage formulas"

Resource:
percentage-short-notes.pdf

Now everything is in one place.

==================================================
15. VERCEL DEPLOYMENT CHECKLIST
==================================================

Before deployment:
- MongoDB production database
- Cloudinary production credentials
- Auth callback URLs
- Environment variables
- Remove console logs with secrets
- Test upload/delete
- Test public share links
- Test mobile layout
- Test 404
- Test permissions

Vercel environment variables:
MONGODB_URI=
AUTH_SECRET=
NEXTAUTH_URL=
CLOUDINARY_CLOUD_NAME=
CLOUDINARY_API_KEY=
CLOUDINARY_API_SECRET=

Never expose:
CLOUDINARY_API_SECRET

==================================================
16. GOOGLE ADS / ADSENSE
==================================================

Do NOT add ads immediately to an empty website.

First have:
- Real working product
- Original useful public content
- About page
- Contact page
- Privacy policy
- Terms
- Clean navigation
- Mobile friendly UI
- No broken pages
- Some real users / useful content

Then apply for Google AdSense.

AdSense is different from Google Ads:
- Google Ads = you PAY Google to advertise your product
- Google AdSense = Google can PAY you for showing ads on your website

For this project, if you want advertisements on your website, you mean AdSense.

Important:
Your logged-in private dashboard is not the best place to depend on ad revenue.
A better model is:

Free:
- Basic timetable
- Tasks
- Notes
- Limited storage

Pro later:
- More storage
- Advanced analytics
- Collaboration
- Export
- AI features

You can still have AdSense on public pages/blog/resources if compliant.

==================================================
17. SECURITY RULES
==================================================

Every API query should include userId.

Wrong:
Note.findById(id)

Better:
Note.findOne({
  _id: id,
  userId: currentUser.id
})

Otherwise one user may access another user's item.

Also:
- Validate input
- Authenticate every protected API
- Check file type
- Check file size
- Signed Cloudinary uploads
- Rate limit uploads
- Never trust frontend userId
- Generate random share tokens
- Allow share revocation

==================================================
18. DEFINITION OF DONE FOR EACH FEATURE
==================================================

A feature is done only when:

[ ] UI built
[ ] Mobile responsive
[ ] API works
[ ] MongoDB works
[ ] Loading state exists
[ ] Empty state exists
[ ] Error state exists
[ ] Edit works
[ ] Delete works
[ ] Permissions checked
[ ] Production tested

==================================================
19. WHAT TO BUILD TODAY
==================================================

TODAY - 2 HOURS

0-15 min
Create GitHub repository:
student-study-hub

15-30 min
Create Next.js project with:
- TypeScript
- App Router
- Tailwind
- ESLint

30-60 min
Create folders:
components
lib
models
types

60-90 min
Build AppShell:
- Sidebar
- Topbar
- Main content

90-120 min
Build static dashboard page with:
- 4 stat cards
- Today's timetable
- Pending tasks
- Recent notes

No backend today.

Tomorrow:
Make login/register UI and MongoDB setup.

==================================================
20. FINAL BUILD ORDER
==================================================

Foundation
  ->
Layout
  ->
Auth
  ->
MongoDB
  ->
Timetable
  ->
Tasks
  ->
Notes
  ->
Folders
  ->
Cloudinary
  ->
Resources
  ->
YouTube
  ->
Sharing
  ->
Search
  ->
Dashboard
  ->
Testing
  ->
Vercel
  ->
Users
  ->
Monetization

END
"""

path = Path("/mnt/data/STUDYHUB_BUILD.txt")
path.write_text(content, encoding="utf-8")
print(f"Created: {path}")
