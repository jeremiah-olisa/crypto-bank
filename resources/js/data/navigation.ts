export const navigation = [
    {
        name: 'Overview',
        menu: [{ label: 'Dashboard', route: 'dashboard', icon: 'Blocks' }],
    },
    {
        name: 'Currency Management',
        menu: [
            {
                label: 'Currencies',
                route: 'currency.list',
                icon: 'Banknote',
                children: [{ label: 'Currency List', route: 'currency.list' }],
            },
            { label: 'Exchange Rates', route: 'home', icon: 'DollarSign' },
        ],
    },
    {
        name: 'Transaction Management',
        menu: [
            {
                label: 'Transactions',
                route: 'home',
                icon: 'CreditCard',
                children: [
                    {
                        label: 'All',
                        route: 'home',
                    },
                    {
                        label: 'Pending',
                        route: 'home',
                    },
                    {
                        label: 'Processing',
                        route: 'home',
                    },
                    {
                        label: 'Done',
                        route: 'home',
                    },
                ],
            },
            // {
            //     label: 'Transaction Disputes',
            //     route: 'home',
            //     icon: 'AlertCircle',
            //     children: [
            //         {
            //             label: 'List',
            //             route: 'home',
            //         },
            //         {
            //             label: 'Pending',
            //             route: 'home',
            //         },
            //         {
            //             label: 'Processing',
            //             route: 'home',
            //         },
            //         {
            //             label: 'Done',
            //             route: 'home',
            //         },
            //     ],
            // },
        ],
    },
    {
        name: 'Settings',
        menu: [
            {
                label: 'Account Settings',
                route: 'home',
                icon: 'UserCog',
                children: [
                    { label: 'Profile Info', route: 'profile.edit' },
                    { label: 'Security', route: 'home' },
                    { label: 'Two-Factor Authentication', route: 'home' },
                    { label: 'Notification', route: 'home' },
                    { label: 'Account Deactivation', route: 'home' },
                ],
            },
        ],
    },
    {
        name: 'User Management',
        menu: [
            {
                label: 'Users',
                route: 'dashboard',
                icon: 'Users',
                children: [
                    { label: 'User List', route: 'home' },
                    { label: 'Invite User', route: 'home' },
                ],
            },
            {
                label: 'Roles & Permissions',
                route: 'dashboard',
                icon: 'ShieldCheck',
                children: [
                    { label: 'Roles', route: 'home' },
                    { label: 'Permissions', route: 'home' },
                ],
            },
        ],
    },
    // {
    //     name: 'Authentication',
    //     menu: [
    //         {
    //             label: 'Authentication',
    //             route: 'home',
    //             icon: 'Fingerprint',
    //             children: [
    //                 { label: 'Login', route: 'home' },
    //                 { label: 'Register', route: 'home' },
    //                 { label: 'Forget Password', route: 'home' },
    //                 { label: 'Verify Email', route: 'home' },
    //                 { label: 'Not Found', route: 'home' },
    //                 { label: 'Server Error', route: 'home' },
    //                 { label: 'Maintenance', route: 'home' },
    //             ],
    //         },
    //     ],
    // },
    // {
    //     name: 'Support',
    //     menu: [
    //         {
    //             label: 'Support',
    //             route: 'home',
    //             icon: 'Headset',
    //             children: [
    //                 { label: 'Overview', route: 'home' },
    //                 { label: 'Tickets', route: 'home' },
    //                 { label: 'Create Ticket', route: 'home' },
    //                 { label: 'FAQs', route: 'home' },
    //                 { label: 'Contact', route: 'home' },
    //             ],
    //         },
    //     ],
    // },
];
