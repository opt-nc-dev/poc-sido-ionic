import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {Geolocation} from '@ionic-native/geolocation/ngx';
import {MapPoints, OptEsriMapComponent} from 'opt-angular-esrimap';
import {MAP_FIELDS} from './model/map.model';

const RESULTS_MAP_POINTS = 'RESULTS';

declare function require(path: string);

@Component({
    selector: 'app-tab1',
    templateUrl: 'tab-geolocation.page.html',
    styleUrls: ['tab-geolocation.page.scss', 'map.component.scss']
})
export class TabGeolocationPage implements OnInit, AfterViewInit {
    latitude: any;
    longitude: any;
    zoomEnabled: true;


    points: MapPoints[];

    @ViewChild('map') map: OptEsriMapComponent;

    constructor(private geolocation: Geolocation) {
        this.points = [];
    }

    ngOnInit() {
        this.geolocation.getCurrentPosition().then((data) => {
            if (data && data.coords) {
                this.latitude = data.coords.latitude;
                this.longitude = data.coords.longitude;
                this.initPoint();
            }
        }).catch((error) => {
            console.log('Error getting location', error);
        });
        const watch = this.geolocation.watchPosition();
        watch.subscribe((data) => {
            // data can be a set of coordinates, or an error (if an error occurred).
            if (data && data.coords) {
                this.latitude = data.coords.latitude;
                this.longitude = data.coords.longitude;
                this.initPoint();
            }
        });
    }

    ngAfterViewInit() {
        this.map.loaded.then(() => {
            this.initMap();
        });
    }

    initMap() {
        const view = this.map.mapView;
        view.constraints.rotationEnabled = false;
        view.constraints.minZoom = 3;
        view.constraints.maxZoom = 13;

        view.popupManager.enabled = false;
        view.popup.dockEnabled = false;
        view.popup.dockOptions = {
            buttonEnabled: false,
            position: 'top-center'
        };

        view.popup.collapseEnabled = false;

        view.on('mouse-wheel', event => {
            if (this.zoomEnabled !== true) {
                event.stopPropagation();
            }
        });
    }

    initPoint() {
        console.log('lat:' + this.latitude);
        console.log('long:' + this.longitude);

        this.points = [
            new MapPoints({
                title: RESULTS_MAP_POINTS,
                symbol: {
                    type: 'picture-marker',
                    url: require('../../assets/pin-orange.png'),
                    width: '36px',
                    height: '36px',
                    yoffset: '18px'
                },
                fields: MAP_FIELDS.fields,
                features: [{
                    'latitude': this.latitude,
                    'NOM': 'TOTO',
                    'PRENOM': 'TATA',
                    'id': 1,
                    'longitude': this.longitude,
                }]
            })
        ];
    }
}
