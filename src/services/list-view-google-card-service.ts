import { IService } from './IService';
import { AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AppSettings } from './app-settings'
import { ToastService } from './toast-service'
import { LoadingService } from './loading-service'

@Injectable()
export class ListViewGoogleCardsService implements IService {

    constructor(public af: AngularFireDatabase, private loadingService: LoadingService, private toastCtrl: ToastService) { }

    getId = (): string => 'googleCards';

    getTitle = (): string => 'Google Cards';

    getAllThemes = (): Array<any> => {
        return [
            { "title": "Styled cards", "theme": "layout1" },
            { "title": "Styled cards 2", "theme": "layout2" },
            { "title": "Full image cards", "theme": "layout3" }
        ];
    };

    getDataForLayout1 = (): any => {
        return {
            "title": "PlaylistName",
            "description": "Author:Username",
            "duration": "35:72",
            "items": [
                {
                    "id": 1,
                    "title": "Jessica Miles",
                    "image": "assets/images/avatar-small/0.jpg",
                    "description": "Birth year: 1984",
                    "shortDescription": "Country: Germany",
                    "longDescription": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do",
                    "iconLike": "icon-thumb-up",
                    "iconFavorite": "icon-heart",
                    "iconShare": "icon-share-variant"
                },
                {
                    "id": 2,
                    "title": "Natasha Gamble",
                    "image": "assets/images/avatar-small/1.jpg",
                    "description": "Birth year: 1980",
                    "shortDescription": "Country: Germany",
                    "longDescription": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do",
                    "iconLike": "icon-thumb-up",
                    "iconFavorite": "icon-heart",
                    "iconShare": "icon-share-variant"
                },
                {
                    "id": 3,
                    "title": "Julia Petersen",
                    "image": "assets/images/avatar-small/2.jpg",
                    "description": "Birth year: 1984",
                    "shortDescription": "Country: Germany",
                    "longDescription": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do",
                    "iconLike": "icon-thumb-up",
                    "iconFavorite": "icon-heart",
                    "iconShare": "icon-share-variant"
                },
                {
                    "id": 4,
                    "title": "Marisa Cain",
                    "image": "assets/images/avatar-small/3.jpg",
                    "description": "Birth year: 1984",
                    "shortDescription": "Country: Germany",
                    "longDescription": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do",
                    "iconLike": "icon-thumb-up",
                    "iconFavorite": "icon-heart",
                    "iconShare": "icon-share-variant"
                },
                {
                    "id": 5,
                    "title": "Lara Lynn",
                    "image": "assets/images/avatar-small/4.jpg",
                    "description": "Birth year: 1984",
                    "shortDescription": "Country: Germany",
                    "longDescription": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do",
                    "iconLike": "icon-thumb-up",
                    "iconFavorite": "icon-heart",
                    "iconShare": "icon-share-variant"
                },
                {
                    "id": 6,
                    "title": "Megan Singleton",
                    "image": "assets/images/avatar-small/5.jpg",
                    "description": "Birth year: 1984",
                    "shortDescription": "Country: Germany",
                    "longDescription": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do",
                    "iconLike": "icon-thumb-up",
                    "iconFavorite": "icon-heart",
                    "iconShare": "icon-share-variant"
                },
                {
                    "id": 7,
                    "title": "Susanna Simmons",
                    "image": "assets/images/avatar-small/6.jpg",
                    "description": "Birth year: 1984",
                    "shortDescription": "Country: Germany",
                    "longDescription": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do",
                    "iconLike": "icon-thumb-up",
                    "iconFavorite": "icon-heart",
                    "iconShare": "icon-share-variant"
                },
                {
                    "id": 8,
                    "title": "Juliette Medina",
                    "image": "assets/images/avatar-small/7.jpg",
                    "description": "Birth year: 1984",
                    "shortDescription": "Country: Germany",
                    "longDescription": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do",
                    "iconLike": "icon-thumb-up",
                    "iconFavorite": "icon-heart",
                    "iconShare": "icon-share-variant"
                }
            ]
        };
    };
    getDataForLayout2 = (): any => {
        return {
            "items": [
                {
                    "id": 1,
                    "title": "Card Title 1",
                    "titleHeader": "Lorem Ipsum 1",
                    "description": "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock",
                    "image": "assets/images/background/1.jpg",
                    "button": "EXPLORE",
                    "shareButton": "SHARE"
                },
                {
                    "id": 2,
                    "title": "Card Title 2",
                    "titleHeader": "Lorem Ipsum 2",
                    "description": "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock",
                    "image": "assets/images/background/2.jpg",
                    "button": "EXPLORE",
                    "shareButton": "SHARE"
                },
                {
                    "id": 3,
                    "title": "Card Title 3",
                    "titleHeader": "Lorem Ipsum 3",
                    "description": "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock",
                    "image": "assets/images/background/5.jpg",
                    "button": "EXPLORE",
                    "shareButton": "SHARE"
                },
                {
                    "id": 4,
                    "title": "Card Title 4",
                    "titleHeader": "Lorem Ipsum 4",
                    "description": "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock",
                    "image": "assets/images/background/3.jpg",
                    "button": "EXPLORE",
                    "shareButton": "SHARE"
                },
                {
                    "id": 5,
                    "title": "Card Title 5",
                    "titleHeader": "Lorem Ipsum 5",
                    "description": "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock",
                    "image": "assets/images/background/1.jpg",
                    "button": "EXPLORE",
                    "shareButton": "SHARE"
                }
            ]
        };
    };

    getDataForLayout3 = (): any => {
        return {
            "refreshMessage": "Pull to refresh...",
            "items": [
                {
                    "id": 1,
                    "image": "assets/images/background/0.jpg",
                    "title": "Card Title",
                    "subtitle": "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                },
                {
                    "id": 2,
                    "image": "assets/images/background/9.jpg",
                    "title": "Card Title",
                    "subtitle": "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                },
                {
                    "id": 3,
                    "image": "assets/images/background/8.jpg",
                    "title": "Card Title",
                    "subtitle": "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                },
                {
                    "id": 4,
                    "image": "assets/images/background/10.jpg",
                    "title": "Card Title",
                    "subtitle": "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                },
                {
                    "id": 5,
                    "image": "assets/images/background/13.jpg",
                    "title": "Card Title",
                    "subtitle": "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                },
                {
                    "id": 6,
                    "image": "assets/images/background/11.jpg",
                    "title": "Card Title",
                    "subtitle": "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                },
                {
                    "id": 7,
                    "image": "assets/images/background/12.jpg",
                    "title": "Card Title",
                    "subtitle": "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                },
                {
                    "id": 8,
                    "image": "assets/images/background/0.jpg",
                    "title": "Card Title",
                    "subtitle": "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                }
            ]
        };
    };

    getDataForTheme = (menuItem: any): Array<any> => {
        return this[
            'getDataFor' +
            menuItem.theme.charAt(0).toUpperCase() +
            menuItem.theme.slice(1)
        ]();
    };

    getEventsForTheme = (menuItem: any): any => {
        var that = this;
        return {
            'onItemClick': function (item: any) {
                  that.toastCtrl.presentToast(item);
            },
            'onExplore': function (item: any) {
                  that.toastCtrl.presentToast("Explore");
            },
            'onShare': function (item: any) {
                  that.toastCtrl.presentToast("Share");
            },
            'onLike': function (item: any) {
                  that.toastCtrl.presentToast("onLike");
            },
            'onFavorite': function (item: any) {
                  that.toastCtrl.presentToast("onFavorite");
            },
            'onFab': function (item: any) {
                  that.toastCtrl.presentToast("Fab");
            },
        };
    };

    prepareParams = (item: any) => {
        let result = {
            title: item.title,
            theme: item.theme,
            data: [],
            events: this.getEventsForTheme(item)
        };
        result[this.getShowItemId(item)] = true;
        return result;
    };

    getShowItemId = (item: any): string => {
        return this.getId() + item.theme.charAt(0).toUpperCase() + "" + item.theme.slice(1);
    }

    load(item: any): Observable<any> {
        var that = this;
        that.loadingService.show();
        if (AppSettings.IS_FIREBASE_ENABLED) {
            return new Observable(observer => {
                this.af
                    .object('listView/googleCards/' + item.theme)
                    .valueChanges()
                    .subscribe(snapshot => {
                        that.loadingService.hide();
                        observer.next(snapshot);
                        observer.complete();
                    }, err => {
                        that.loadingService.hide();
                        observer.error([]);
                        observer.complete();
                    });
            });
        } else {
            return new Observable(observer => {
                that.loadingService.hide();
                observer.next(this.getDataForTheme(item));
                observer.complete();
            });
        }
    }
}
