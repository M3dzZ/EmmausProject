api_key = "qtgnmfFv6vapEeEZYKGqFixP8WympINgYwFbMWQo"
nasa_url = "https://api.nasa.gov/neo/rest/v1/feed?api_key=" + api_key
lookup_url = "https://api.nasa.gov/neo/rest/v1/neo/"


def asteroidsRequest(request):

    start_date = request.GET.get('start_date', '2022-10-10')
    end_date = request.GET.get('end_date', '2022-10-15')

    request_date = requests.get(
        nasa_url + "&start_date=" + start_date + "&end_date=" + end_date)

    return HttpResponse(request_date.text)

