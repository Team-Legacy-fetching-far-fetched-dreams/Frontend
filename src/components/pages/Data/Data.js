import {
    UilEstate, 
    UilClipboardAlt,
    UilUsersAlt,
    UilPackage,
    UilChart,
    UilSignOutAlt,
     UilUserNurse, 
     UilUserMd , 
     UilAccessibleIconAlt
} from "@iconscout/react-unicons";


// import doc11 from '../../../imgs/doc11.png'

export const WidgetData = [
    {
        title: "DOCTOR",
        icon: UilUserMd
    },
    {
        title: "NURSE",
        icon: UilUserNurse
    },
    {
        title: "PATIENT",
        icon: UilAccessibleIconAlt
    },
];

export const SidebarData = [
        {
            icon: UilEstate,
            heading: 'Dashboard',
            link: '/AdminDashboard'
        },
        {
            icon: UilUserMd,
            heading: 'Doctor',
            link: '/AdminDashboard/Doctor'
        },
        {
            icon: UilUserNurse,
            heading: 'Nurse',
            link: '/AdminDashboard/Nurse'
        },
        {
            icon: UilAccessibleIconAlt,
            heading: 'Patient',
            link: '/AdminDashboard/Patient'
        },


];


// Recent Update Card Data
// export const UpdatesData = [
//     {
//       img: doc11,
//       name: " Dr Essuman",
//       noti: "Last seen ",
//       time: "25 seconds ago",
//     },
   
//   ];
  