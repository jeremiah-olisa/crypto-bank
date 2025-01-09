export const navigation = [
    {
        name: 'Overview',
        menu: [{ label: 'Dashboard', route: 'dashboard', icon: 'Blocks' }],
    },
    {
        name: 'Currency Management',
        menu: [
            { label: 'Currencies', route: 'home', icon: 'Banknote' },
            { label: 'Exchange Rates', route: 'home', icon: 'DollarSign' },
        ],
    },
    {
        name: 'Transaction Management',
        menu: [
            { label: 'Transactions', route: 'home', icon: 'CreditCard' },
            {
                label: 'Transaction Disputes',
                route: 'home',
                icon: 'AlertCircle',
            },
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
                    { label: 'Profile Info', route: 'home' },
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
            { label: 'Users', route: 'dashboard', icon: 'Users' },
            {
                label: 'Roles & Permissions',
                route: 'dashboard',
                icon: 'ShieldCheck',
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
