export const navigation = [
    {
        name: 'Overview',
        menu: [{ label: 'Dashboard', route: 'dashboard', icon: 'Blocks' }],
    },
    {
        name: 'Currency Management',
        menu: [
            { label: 'Currencies', route: 'dashboard', icon: 'Banknote' },
            { label: 'Exchange Rates', route: 'dashboard', icon: 'DollarSign' },
        ],
    },
    {
        name: 'Transaction Management',
        menu: [
            { label: 'Transactions', route: 'dashboard', icon: 'CreditCard' },
            {
                label: 'Transaction Disputes',
                route: 'dashboard',
                icon: 'AlertCircle',
            },
        ],
    },
    {
        name: 'Settings',
        menu: [
            {
                label: 'Account Settings',
                route: 'dashboard',
                icon: 'UserCog',
                children: [
                    { label: 'Profile Info', route: 'dashboard' },
                    { label: 'Security', route: 'dashboard' },
                    { label: 'Two-Factor Authentication', route: 'dashboard' },
                    { label: 'Notification', route: 'dashboard' },
                    { label: 'Account Deactivation', route: 'dashboard' },
                ],
            },
        ],
    },
    {
        name: 'Authentication',
        menu: [
            {
                label: 'Authentication',
                route: 'dashboard',
                icon: 'Fingerprint',
                children: [
                    { label: 'Login', route: 'dashboard' },
                    { label: 'Register', route: 'dashboard' },
                    { label: 'Forget Password', route: 'dashboard' },
                    { label: 'Verify Email', route: 'dashboard' },
                    { label: 'Not Found', route: 'dashboard' },
                    { label: 'Server Error', route: 'dashboard' },
                    { label: 'Maintenance', route: 'dashboard' },
                ],
            },
        ],
    },
    {
        name: 'Support',
        menu: [
            {
                label: 'Support',
                route: 'dashboard',
                icon: 'Headset',
                children: [
                    { label: 'Overview', route: 'dashboard' },
                    { label: 'Tickets', route: 'dashboard' },
                    { label: 'Create Ticket', route: 'dashboard' },
                    { label: 'FAQs', route: 'dashboard' },
                    { label: 'Contact', route: 'dashboard' },
                ],
            },
        ],
    },
];
