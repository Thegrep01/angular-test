import { Inject, Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { BASE_URL_TOKEN } from '../../config';

export interface IRes {
    // tslint:disable-next-line:no-any
    results: any;
    count: number;
    next: string;
    previous: string;
}
@Injectable()
export class InterceptorService implements HttpInterceptor {
    public constructor(@Inject(BASE_URL_TOKEN) private _baseUrl: string) {}

    public intercept<T extends IRes>(req: HttpRequest<T>, next: HttpHandler): Observable<HttpResponse<T>> {
        const jsonReq: HttpRequest<T> = req.clone({
            url: `${this._baseUrl}${req.url}`,
        });
        return next.handle(jsonReq).pipe(
            filter(InterceptorService._isHttpResponse),
            map((res: HttpResponse<IRes>) => {
                return res.clone({ body: res.body && res.body.results });
            })
        );
    }

    // tslint:disable-next-line:no-any
    private static _isHttpResponse(event: HttpEvent<any>): event is HttpResponse<IRes> {
        return event instanceof HttpResponse;
    }
}
