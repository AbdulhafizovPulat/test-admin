import { SavedQueriesList, FilterLiveSearch, FilterList, FilterListItem, TextInput,ReferenceInput, useTranslate } from 'react-admin';
import { Card, CardContent } from '@mui/material';
import MailIcon from '@mui/icons-material/MailOutline';
import CategoryIcon from '@mui/icons-material/LocalOffer';

export const PostFilterSidebar = () => {
    const t = useTranslate();
    return (
        <Card sx={{ order: -1, mr: 7, mt: 9, width: 320 }}>
            <CardContent sx={{ '&': {p:5}}}>
                <SavedQueriesList />
                <FilterLiveSearch />
                <FilterList label="saved_queries.subscribed_to_newsletter" icon={<MailIcon />}>
                    <FilterListItem label="saved_queries.yes" value={{ has_newsletter: true }} />
                    <FilterListItem label="saved_queries.no" value={{ has_newsletter: false }} />
                </FilterList>
                <FilterList label="saved_queries.category" icon={<CategoryIcon />}>
                    <FilterListItem label="saved_queries.tests" value={{ category: 'tests' }} />
                    <FilterListItem label="saved_queries.news" value={{ category: 'news' }} />
                    <FilterListItem label="saved_queries.deals" value={{ category: 'deals' }} />
                    <FilterListItem label="saved_queries.tutorials" value={{ category: 'tutorials' }} />
                </FilterList>
            </CardContent>
        </Card>
    );
};
export const SearchFilters = [
    <TextInput source="q" label="Search" alwaysOn />,
    <ReferenceInput source="userId" label="User" reference="users" />,
];