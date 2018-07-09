import GetStartedArticle from './articles/get-started.mdsx'

import Button from './components/button.mdsx'
import Icon from './components/icon.mdsx'

import Form from './components/form.mdsx'
import CheckBox from './components/checkbox.mdsx'
import Input from './components/input.mdsx'
import Select from './components/select.mdsx'

import Table from './components/table.mdsx'
import List from './components/list.mdsx'
import Toast from './components/toast.mdsx'

import Menus from './components/menus.mdsx'
import Pagination from './components/pagination.mdsx'
import Tabs from './components/Tabs.mdsx'

const Config = [
    { name: '开始使用', route: '/docs/articles/get-started', component: GetStartedArticle },
    {
        name: '组件',
        options: [
            {
                name: '基本',
                options: [
                    { name: 'Icon 图标', route: '/docs/components/icon', component: Icon },
                    { name: 'Button 按钮', route: '/docs/components/button', component: Button }
                ]
            },
            {
                name: '表单',
                options: [
                    { name: 'Form 表单', route: '/docs/components/form', component: Form },
                    { name: 'Input 输入框', route: '/docs/components/input', component: Input },
                    { name: 'Select 选项', route: '/docs/components/select', component: Select },
                    { name: 'Checkbox 复选框', route: '/docs/components/checkbox', component: CheckBox }
                ]
            },
            {
                name: '数据呈现',
                options: [
                    { name: 'List 列表', route: '/docs/components/list', component: List },
                    { name: 'Table 表格', route: '/docs/components/table', component: Table },
                    { name: 'Toast 和 Modal 弹窗', route: '/docs/components/toast', component: Toast }
                ]
            },
            {
                name: '导航',
                options: [
                    { name: 'Pagination 分页', route: '/docs/components/pagination', component: Pagination },
                    { name: 'Tabs 选项卡', route: '/docs/components/tabs', component: Tabs },
                    { name: 'Menus 菜单栏', route: '/docs/components/menus', component: Menus }
                ]
            }
        ]
    }
]

export default Config
