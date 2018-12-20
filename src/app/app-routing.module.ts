import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    {
        path: 'self-test-result',
        loadChildren: './pages/self-test/result/result.module#ResultPageModule'
    },
    {
        path: 'self-test',
        loadChildren: './pages/self-test/self-test.module#SelfTestPageModule'
    },
    {
        path: 'result',
        loadChildren: './pages/questions/result/result.module#ResultPageModule'
    },
    {
        path: 'questions',
        loadChildren: './pages/questions/questions.module#QuestionsPageModule'
    },
    {
        path: 'question',
        loadChildren:
            './pages/questions/question/question.module#QuestionPageModule'
    },
    {
        path: 'login',
        loadChildren: './pages/login/login.module#LoginPageModule'
    },
    {
        path: '',
        loadChildren: './pages/welcome/welcome.module#WelcomePageModule'
    },
    {
        path: '',
        loadChildren: './pages/tabs/tabs.module#TabsPageModule'
    },
    {
        path: 'home',
        loadChildren: './pages/tabs/home/home.module#HomePageModule'
    },
    {
        path: 'notice',
        loadChildren: './pages/tabs/notice/notice.module#NoticePageModule'
    },
    {
        path: 'find-friend',
        loadChildren:
            './pages/find-friend/find-friend.module#FindFriendPageModule'
    },
    {
        path: 'account-setting',
        loadChildren: './pages/account-setting/account-setting.module#AccountSettingPageModule'
    },

];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
