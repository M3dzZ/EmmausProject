api_key = "qtgnmfFv6vapEeEZYKGqFixP8WympINgYwFbMWQo"
nasa_url = "https://api.nasa.gov/neo/rest/v1/feed?api_key=" + api_key
lookup_url = "https://api.nasa.gov/neo/rest/v1/neo/"


def asteroidsRequest(request):

    start_date = request.GET.get('start_date', '2022-10-10')
    end_date = request.GET.get('end_date', '2022-10-15')

    request_date = requests.get(
        nasa_url + "&start_date=" + start_date + "&end_date=" + end_date)

    return HttpResponse(request_date.text)


def asteroidLookUpRequest(request):
    id_asteroid = request.GET.get('id')
    request_lookup = requests.get(
        lookup_url + id_asteroid + "?api_key=" + api_key)

    result = json.loads(request_lookup.text)
    close_approach_data = result["close_approach_data"]

    close_approach_data_len = len(close_approach_data)
    most_recent_approach_date_index = close_approach_data_len

    for i in range(close_approach_data_len - 1):
        current = close_approach_data[i]
        current_date = datetime.strptime(
            current["close_approach_date_full"], "%Y-%b-%d %H:%M")

        upcoming = close_approach_data[i+1]
        upcoming_date = datetime.strptime(
            upcoming["close_approach_date_full"], "%Y-%b-%d %H:%M")

        today_date = datetime.today()

        if ((current_date < today_date) & (today_date < upcoming_date)):
            most_recent_approach_date_index = i
            break

    if (most_recent_approach_date_index < 5):
        last_five_approach_dates = close_approach_data[0: most_recent_approach_date_index]
    else:
        last_five_approach_dates = close_approach_data[most_recent_approach_date_index -
                                                       5: most_recent_approach_date_index]

    print(last_five_approach_dates)

    return HttpResponse(json.dumps(last_five_approach_dates))

