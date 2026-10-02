
# Bualuang 101

**ดาวเด่นบัวหลวง 101**

Digital platform สำหรับรวบรวมและนำเสนอข้อมูลของโครงการดาวเด่นบัวหลวง 101 ตั้งแต่ผู้เข้าร่วม กิจกรรม ผลงาน ไปจนถึงภาพและสื่อจากโครงการ

---

## Project

เว็บไซต์นี้ออกแบบให้เป็นพื้นที่กลางสำหรับ

* ข้อมูลโครงการ
* Participant Profiles
* Activities
* Artwork
* News & Updates
* Photo & Video Archive
* Digital Archive

เนื้อหาสามารถขยายและจัดเก็บเพิ่มเติมตามแต่ละปีของโครงการได้

---

## Participation

ผู้ชมสามารถมีส่วนร่วมกับโครงการได้หลายรูปแบบ ทั้งในช่วงก่อน ระหว่าง และหลังการจัดกิจกรรม

### ก่อนกิจกรรม

* ติดตามข่าวสารและกำหนดการ
* ทำความรู้จักผู้เข้าร่วมจากสถาบันต่าง ๆ
* แชร์และเผยแพร่ Content ของโครงการ
* เข้าร่วมกิจกรรมออนไลน์หรือกิจกรรมสร้าง Engagement

### ระหว่างกิจกรรม

* ติดตามบรรยากาศและเรื่องราวของผู้เข้าร่วม
* รับชมภาพและวิดีโอจากกิจกรรม
* แสดงความคิดเห็นและพูดคุยผ่าน Social Media
* สนับสนุนและส่งกำลังใจให้ผู้เข้าร่วม

### หลังจบกิจกรรม

* ชมผลงานและภาพบรรยากาศย้อนหลัง
* ติดตามผลการประกาศรางวัล
* แชร์ผลงานและเรื่องราวที่ประทับใจ
* กลับมาค้นหาข้อมูลผู้เข้าร่วมและ Archive ของแต่ละปี

---

## Installation

โปรเจกต์นี้เป็นเว็บไซต์แบบ Static จึงไม่จำเป็นต้องติดตั้ง Backend หรือ Database

### Requirements

* Web Browser เช่น Chrome, Safari, Firefox หรือ Edge
* Code Editor เช่น Visual Studio Code สำหรับแก้ไขไฟล์
* Git สำหรับการจัดการโปรเจกต์ (ถ้าต้องการ)

### วิธีเริ่มใช้งาน

**1. ดาวน์โหลดโปรเจกต์**

ดาวน์โหลดหรือ Clone Repository ลงในเครื่อง

**2. เปิดโฟลเดอร์โปรเจกต์**

```text
bualuang101/
```

ตรวจสอบว่าไฟล์ `index.html` อยู่ที่ระดับเดียวกับโฟลเดอร์ `css`, `js`, `data` และ `pages`

**3. เปิดเว็บไซต์**

สามารถเปิดไฟล์

```text
index.html
```

ด้วย Web Browser ได้โดยตรง

สำหรับการพัฒนา แนะนำให้เปิดโฟลเดอร์ด้วย Visual Studio Code และใช้ Local Server เช่น Live Server เพื่อให้การโหลดไฟล์ JSON ทำงานได้อย่างถูกต้อง

---

## Usage

### แก้ไขข้อมูลกิจกรรม

ข้อมูลกิจกรรมอยู่ที่

```text
data/activities.json
```

สามารถเพิ่มหรือแก้ไขรายการกิจกรรมตามรูปแบบข้อมูลที่กำหนดไว้ในไฟล์

### เพิ่มข้อมูลผู้เข้าร่วม

ข้อมูลผู้เข้าร่วมอยู่ที่

```text
data/participants.json
```

เพิ่มข้อมูลตามโครงสร้าง JSON ที่กำหนดไว้ โดยควรตรวจสอบข้อมูลก่อนเผยแพร่ทุกครั้ง

### เพิ่มข้อมูลสถาบัน

ข้อมูลสถาบันอยู่ที่

```text
data/institutions.json
```

ใช้สำหรับเชื่อมโยงข้อมูลสถาบันกับ Participant Archive

### เพิ่มรูปภาพ

จัดเก็บรูปภาพตามประเภทใน

```text
assets/images/
├── logo/
├── participants/
├── activities/
├── previous-years/
└── banners/
```

ควรตั้งชื่อไฟล์ให้สื่อความหมายและเป็นระบบ เพื่อให้ง่ายต่อการจัดการไฟล์ในระยะยาว

---

## Structure

```text
bualuang101/
│
├── index.html
│
├── css/
│   └── style.css
│
├── js/
│   └── main.js
│
├── data/
│   ├── participants.json
│   ├── institutions.json
│   └── activities.json
│
├── pages/
│   ├── about.html
│   ├── activities.html
│   ├── contact.html
│   ├── news.html
│   ├── participant.html
│   └── participants.html
│
├── assets/
│   └── images/
│       ├── logo/
│       ├── participants/
│       ├── activities/
│       ├── previous-years/
│       └── banners/
│
└── README.md
```

---

## Data

ข้อมูลที่ใช้ภายในเว็บไซต์จัดเก็บแยกเป็น JSON

```text
data/
├── participants.json
├── institutions.json
└── activities.json
```

ช่วยให้สามารถเพิ่มหรือแก้ไขข้อมูลได้โดยไม่ต้องเปลี่ยนโครงสร้างหลักของเว็บไซต์

---

## Participant Archive

ระบบรองรับการค้นหาและกรองข้อมูลผู้เข้าร่วมตาม

* ชื่อ
* สถาบัน
* จังหวัด
* สาขาวิชา

แต่ละ Participant สามารถมีหน้า Profile และข้อมูลผลงานของตัวเอง

---

## Content

รองรับการจัดเก็บ Content หลายรูปแบบ

**Short-form**

TikTok / Reels / Shorts

**Long-form**

YouTube / Facebook / Website

**Visual**

Photography / Artwork / Event Documentation

---

## Technology

```text
HTML5
CSS3
JavaScript
JSON
```

---

## Content & Privacy

ข้อมูลของผู้เข้าร่วม รูปภาพ ผลงาน และข้อมูลที่สามารถระบุตัวบุคคลได้ ควรได้รับการตรวจสอบและได้รับอนุญาตก่อนเผยแพร่

ข้อมูลตัวอย่างในระบบไม่ควรถูกนำไปใช้แทนข้อมูลจริงโดยไม่ได้รับการตรวจสอบ

---

## Project Credits

**ดาวเด่นบัวหลวง 101**

Organized by
**Bualuang Foundation, Bangkok Bank**

Production & Public Relations
**101 Production**

---

## Status

`Development`

Built for the documentation, communication and digital archiving of Bualuang 101.

---

### © Bualuang 101
